import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserCard from '../../components/chatinterface'; // Assuming UserCard is in the same directory
import MessageList from './messages'; // Import MessageList
import chatData from './messagedata.json'; // Import chat data

const ChatPage = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };

    const sendMessage = () => {
        if (newMessage.trim() && selectedChat) {
            // Add logic to send a message to the selected chat
            // This might involve updating the chatData or making an API call
            // Update the selectedChat with the new message
            const updatedMessages = [...selectedChat.messages, { type: 'sent', text: newMessage }];
            setSelectedChat({ ...selectedChat, messages: updatedMessages });
            setNewMessage('');
        }
    };

    return (
        <Box sx={{ flexGrow: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    {/* Message List - shows chat summaries */}
                    <MessageList chats={chatData.chats} onChatSelect={handleChatSelect} />
                </Grid>
                <Grid item xs={12} md={8}>
                    {/* Display messages for the selected chat */}
                    {selectedChat && selectedChat.messages.map((msg, index) => (
                        <UserCard key={index} user={{ name: msg.type === 'sent' ? 'You' : selectedChat.with, messages: [msg.text] }} messageType={msg.type} />
                    ))}
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', marginTop: 2 }}>
                <TextField
                    label="Type a message"
                    variant="outlined"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    fullWidth
                />
                <Button variant="contained" color="primary" onClick={sendMessage}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default ChatPage;
