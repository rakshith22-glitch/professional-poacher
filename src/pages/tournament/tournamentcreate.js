import React, { useState } from 'react';
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Card, CardContent, Typography, Grid } from '@mui/material';

const TournamentCreation = () => {
    const [tournamentName, setTournamentName] = useState('');
    const [tournamentType, setTournamentType] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [maxParticipants, setMaxParticipants] = useState('');
    const [entryFee, setEntryFee] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ tournamentName, tournamentType, date, location, maxParticipants, entryFee, description });
    };

    return (
        <Card raised sx={{ maxWidth: 600, mx: 'auto', mt: 10, p: 3 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    Create Tournament
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}>
                    <TextField
                        label="Tournament Name"
                        value={tournamentName}
                        onChange={(e) => setTournamentName(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <FormControl fullWidth sx={{ marginLeft: 1 }} margin="normal">
                        <InputLabel>Tournament Type</InputLabel>
                        <Select
                            value={tournamentType}
                            label="Tournament Type"
                            onChange={(e) => setTournamentType(e.target.value)}
                            required
                        >
                            <MenuItem value="Single Elimination">Single Elimination</MenuItem>
                            <MenuItem value="Double Elimination">Double Elimination</MenuItem>
                            <MenuItem value="Round Robin">Round Robin</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Start Date"
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                fullWidth
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="End Date"
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                fullWidth
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        label="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Max Participants"
                        value={maxParticipants}
                        onChange={(e) => setMaxParticipants(e.target.value)}
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Entry Fee"
                        value={entryFee}
                        onChange={(e) => setEntryFee(e.target.value)}
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button type="submit" variant="contained" color="primary">Create Tournament</Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TournamentCreation;