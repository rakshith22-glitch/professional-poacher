import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import UserCard from '../components/usercard';
import userData from '../pages/user/user.json'; // Update the path to your JSON file
import {
    Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(7),
    height: theme.spacing(7),
}));

const ChatWithPage = () => {
    const { chatWith } = useParams();
    const [newMessage, setNewMessage] = useState('');
    const chat = userData[0].chats.find(c => c.with === chatWith);

    const sendMessage = () => {
        // Logic to send message
        console.log('Sending message:', newMessage);
        setNewMessage('');
    };

    if (!chat) {
        return <Typography>No chat found.</Typography>;
    }

    return (
        <Box sx={{
            width: { xs: "100%", md: "40%" },
            margin: 'auto',
            marginTop: 15,
            display: 'flex',  // Enable flex layout
            flexDirection: 'column', // Stack children vertically
            alignItems: 'center',
            border: '1px solid lightgray',
            borderRadius: '8px',
            padding: 2,
            boxShadow: 3,
            // Add scroll for long chats
        }}>      <StyledAvatar
                alt={chat.with}
                src={chat.image || "/default-profile.png"}
            />
            <Typography variant="h4" sx={{ textAlign: 'center', mt: 2 }}>{chat.with}</Typography>
            <Box sx={{ padding: 2 }}>

                {chat.messages.map((message, index) => (
                    <UserCard
                        key={index}
                        user={{ name: message.type === 'sent' ? 'You' : chat.with }}
                        message={message.text}
                        style={{
                            textAlign: message.type === 'received' ? 'left' : 'right',
                            backgroundColor: message.type === 'received' ? '#1976d2' : '#69FC60',
                            color: message.type === 'received' ? 'white' : 'black',
                            borderRadius: '5px',
                            padding: '10px',
                            margin: '10px 0'
                        }}
                    />
                ))}
            </Box>
            <Box sx={{ display: 'flex', padding: 2 }}>
                <TextField
                    label="Type a message"
                    variant="outlined"
                    fullWidth
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button variant="contained" color="primary" sx={{ marginLeft: 2 }} onClick={sendMessage}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default ChatWithPage;
