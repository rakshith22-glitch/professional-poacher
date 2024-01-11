import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import UserCard from '../components/usercard';
import usersData from './messagedata.json'; // Update the path to your JSON file

const MessageList = () => {
    return (
        <Box sx={{ m: 2, marginTop: 10 }}>
        <Grid container spacing={2}>
            {usersData.users.map((user, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <UserCard user={user} />
                </Grid>
            ))}
        </Grid>
        </Box>
    );
};

export default MessageList;