import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Grid, FormControl, InputLabel, Select, MenuItem, Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';// Example icon, replace with appropriate icons
import IndoorIcon from '@mui/icons-material/AcUnit'; // Example icon
import SavingsIcon from '@mui/icons-material/Savings';
import PaidIcon from '@mui/icons-material/Paid';
import Tooltip from '@mui/material/Tooltip';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import EditRoadIcon from '@mui/icons-material/EditRoad';

import customMarkerIconUrl from '../../assets/custom-marker-icon.png'; // Replace with your icon's path

const customMarkerIcon = new L.Icon({
    iconUrl: customMarkerIconUrl,
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

const CourtMap = ({ courts }) => {
    // State and handlers
    const [filteredCourts, setFilteredCourts] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [mapCenter, setMapCenter] = useState([35.966215, -84.123136]); // Default center

    useEffect(() => {
        setFilteredCourts(courts);
        console.log(courts)
    }, [courts]);


    return (
        <Box sx={{ flexGrow: 1, padding: 2, mt: 25 }}>
            <Grid container spacing={3}>
                {/* List of Courts */}
                <Grid item xs={12} md={4}>
                    {courts.map((court) => (
                        <Card key={court.id} sx={{ display: 'flex', mb: 2 }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image={court.imageUrl} // Replace with your image URL
                                alt="Court Image"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h6">{court.title}</Typography>
                                    <Typography variant="body2">{court.address}</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>

                                        <Tooltip title="Courts">
                                            <SportsTennisIcon color='primary' />
                                        </Tooltip>
                                        <Typography sx={{ ml: 1, mr: 2 }} variant="body2">{court.total_courts}</Typography>
                                        {courts.indoor_courts != '0' ? <Tooltip title="Indoor">
                                            <IndoorIcon color='primary' />
                                        </Tooltip> : ''}
                                        <Typography sx={{ mr: 2, }} variant="body2">{court.indoor_courts}</Typography>
                                        {courts.outdoor_courts != "0" ? <Tooltip title="Outdoor">
                                            <AirIcon color='primary' />
                                        </Tooltip> : ''}
                                        <Typography sx={{}} variant="body2">{court.outdoor_courts}</Typography>

                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>

                                        <Tooltip sx={{ mr: 4 }} title={court.lines}>
                                            <EditRoadIcon color='primary' />
                                        </Tooltip>

                                        {court.access === 'free' ? (
                                            <>
                                                <Tooltip title="Free">
                                                    <SavingsIcon color='primary' />
                                                </Tooltip>

                                            </>
                                        ) : (
                                            <>
                                                <Tooltip title="Pay" >
                                                    <PaidIcon color='primary' />
                                                </Tooltip>

                                            </>
                                        )}
                                    </Box>
                                </CardContent>
                            </Box>
                        </Card>
                    ))}
                </Grid>

                {/* Map */}
                <Grid item xs={12} md={4}>
                    <MapContainer center={mapCenter} zoom={13} style={{ height: '500px', width: '100%' }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {filteredCourts.map((court) => (
                            <Marker key={court.id} position={[court.geometry.coordinates[1], court.geometry.coordinates[0]]} icon={customMarkerIcon}>
                                <Popup>{court.title}<br />{court.address}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CourtMap;