import usersData from './user.json';
import UserInfo from "./userinfo";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';

const UserProfileComponent = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredUsers = usersData.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.phone.toLowerCase().includes(searchTerm) ||
            user.address.city.toLowerCase().includes(searchTerm)
    );

    const handleCardClick = (user) => {
        navigate(`/user/${user.id}`);
    };

    return (
        <Box sx={{
            bgcolor: '#1976d2',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',        
            margin: "auto",
        }}>
            <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center', marginTop: 8,}}>
                <Card sx={{ width: '100%' }}>
                    <TextField
                        label="Search Players"
                        variant="filled"
                        fullWidth
                        onChange={handleSearchChange}
                    />
                </Card>
            </Box>
            <List sx={{ maxHeight: '90%', overflow: 'auto', width: '95%' }}>
                {filteredUsers.map((user, index) => (
                    <UserInfo user={user} key={user.id} onClick={() => handleCardClick(user)} />
                ))}
            </List>
        </Box>
    );
};

export default UserProfileComponent;
