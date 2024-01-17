import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
import tournamentData from './tournaments.json'; 
const TournamentRegistration = () => {
    const { tournamentId } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission
    };
    const tournament = tournamentData.find(tournament => tournament.id.toString() === tournamentId);


    return (
        <Container maxWidth="sm" style={{marginTop: 85}}>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>
                <Typography align='center' variant="h6">{tournament.name}</Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        type="email"
                    />
                    <TextField
                        label="Duper Rating"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        type="number"
                    />
                    {/* Add any other fields as necessary */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit Registration
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default TournamentRegistration;