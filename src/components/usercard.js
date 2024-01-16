import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UserCard = ({ user, message, style }) => {
    return (
        <Card sx={{ width: '100%', ...style, marginBottom: '10px', overflow: 'hidden', }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {user.name}
                </Typography>
                <Typography variant="body2">
                    {message}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;
