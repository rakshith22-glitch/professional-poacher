import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, TextField, Button, Typography, Card } from '@mui/material';
import UserCard from '../../components/usercard';
import userData from '../user/user.json'; // Update the path to your JSON file
import {
    Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material"
const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(7),
    height: theme.spacing(7),
}));

const ChatWithPage = () => {
    const { chatWith } = useParams();
    const [newMessage, setNewMessage] = useState('');
    const chat = userData[0].chats.find(c => c.with === chatWith);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const sendMessage = () => {
        // Logic to send message
        console.log('Sending message:', newMessage);
        setNewMessage('');
    };

    if (!chat) {
        return <Typography>No chat found.</Typography>;
    }


    const HighlightedCard = styled(Card)(({ theme, selected }) => ({

        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "80px",
        padding: theme.spacing(2),
        backgroundColor: selected ? theme.palette.action.selected : "#fff",
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        '&:hover': {
            cursor: 'pointer',
            boxShadow: theme.shadows[4],
        },
        transition: 'box-shadow 0.2s',
        maxWidth: isMobile ? '100%' : '30%',
    }));

    return (
        <HighlightedCard
        // Add scroll for long chats
        >      <StyledAvatar

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
                            margin: '10px 0',
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
        </HighlightedCard>
    );
};

export default ChatWithPage;
