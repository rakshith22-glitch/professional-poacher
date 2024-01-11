import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const UserCard = ({ user }) => {
    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Messages:
                </Typography>
                <List>
                    {user.messages.map((message, index) => (
                        <ListItem key={index}>
                            {message}
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default UserCard;
