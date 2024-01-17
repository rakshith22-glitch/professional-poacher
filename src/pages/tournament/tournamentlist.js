import React from 'react';
import { Card, CardContent, Typography, Grid, Button, CardActions, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import tournamentData from './tournaments.json'; // Adjust the path as necessary
import AddIcon from '@mui/icons-material/Add';

const TournamentList = () => {
    const navigate = useNavigate();

    const handleRegisterClick = (tournamentId) => {
        // Navigate to the tournament registration page
        navigate(`/tournament/register/${tournamentId}`);
    };

    const handleCreateTournament = () => {
        // Navigate to the create tournament page
        navigate('/tournament/create');
    };

    return (
        <Box style={{ marginTop: 75, padding: 2 }}>
            <Box display="flex" justifyContent="center" marginBottom={4}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCreateTournament}
                >
                   <Typography> Create A Tournament </Typography>
                </Button>
            </Box>
            <Grid container spacing={2} justifyContent="center">
                {tournamentData.map(tournament => (
                    <Grid item key={tournament.id} xs={12} sm={6} md={4}>
                        <Card raised>
                            <CardContent>
                                <Typography style={{ margin: 2, paddingTop: 1, paddingBottom: 2 }} variant="h6" align="center">{tournament.name}</Typography>
                                <Typography style={{ margin: 2, paddingTop: 1, paddingBottom: 2 }} color="textSecondary" align="center">Type: {tournament.type}</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}> <Typography style={{ paddingTop: 2, paddingBottom: 2 }} color="textSecondary" align="center">From: {tournament.startdate}</Typography></Grid>
                                    <Grid item xs={6}><Typography style={{ paddingTop: 2, paddingBottom: 2 }} color="textSecondary" align="center">To: {tournament.enddate}</Typography></Grid>
                                </Grid>
                                <Typography style={{ margin: 2, paddingTop: 1, paddingBottom: 2 }} color="textSecondary" align="center">Location: {tournament.location}</Typography>
                                <Typography style={{ margin: 2, paddingTop: 1, paddingBottom: 2 }} color="textSecondary" align="center">Max Participants: {tournament.maxParticipants}</Typography>
                                <Typography style={{ margin: 2, paddingTop: 1, paddingBottom: 2 }} color="textSecondary" align="center">Entry Fee: ${tournament.entryFee}</Typography>
                                <Typography style={{ margin: 2, paddingTop: 1, paddingBottom: 2 }} variant="body2" align="center">{tournament.description}</Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button
                                    size="small"
                                    color="primary"
                                    variant="contained"
                                    onClick={() => handleRegisterClick(tournament.id)}
                                >
                                    Register
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TournamentList;