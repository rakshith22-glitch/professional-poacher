import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import UserCard from '../components/usercard';
import chatData from '../pages/user/user.json';
import { useNavigate } from 'react-router-dom'; // assuming you're using react-router for navigation
import {
    Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(7),
    height: theme.spacing(7),
}));
const MessageList = () => {
    const navigate = useNavigate();

    const handleChatMore = (chatWith) => {
        navigate(`/chat/${chatWith}`); // Navigate to individual chat page
    };
  
    return (
        <Box sx={{ m: 2, marginTop: 20 }}>
            <Grid container spacing={2}>
                {chatData[0].chats.map((chat, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Box sx={{
                            display: 'flex',  // Enable flex layout
                            flexDirection: 'column', // Stack children vertically
                            alignItems: 'center', // Center children horizontally
                            marginBottom: 3,
                            border: '1px solid lightgray',
                            borderRadius: '8px',
                            padding: 2,
                            cursor: "pointer",
                            "&:hover": { boxShadow: 6 },
                        }}>
                            <StyledAvatar
                                alt={chat.with}
                                src={chat.image || "/default-profile.png"}
                            />
                            <h3>{chat.with}</h3>
       
                            {chat.messages.slice(0, 2).map((message, msgIndex) => (
                                <UserCard
                                    key={msgIndex}
                                    user={{ name: message.type === 'sent' ? 'You' : chat.with }}
                                    message={message.text}
                                    style={{
                                        textAlign: message.type === 'received' ? 'left' : 'right',
                                        backgroundColor: message.type === 'received' ? '#1976d2' : '#69FC60',
                                        color: message.type === 'received' ? 'white' : 'black',
                                        
                                        borderRadius: '5px',
                                        paddingRight: '10px'
                                    }}
                                />
                            ))}
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
                                <Button
                                    variant="contained"
                                    onClick={() => handleChatMore(chat.with)}
                                >
                                    Chat More
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MessageList;
