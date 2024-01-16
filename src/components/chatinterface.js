import React from 'react';
import { Box, Typography } from '@mui/material';

const ChatInterface = ({ type, text }) => {
    const isSent = type === 'sent';

    return (
        <Box sx={{
            textAlign: isSent ? 'right' : 'left',
            alignSelf: isSent ? 'flex-end' : 'flex-start',
            backgroundColor: isSent ? '#blue' : '#grey',
            color: 'white',
            borderRadius: '10px',
            padding: '10px',
            maxWidth: '60%',
            margin: '5px',
            wordBreak: 'break-word'
        }}>
            <Typography variant="body1">{text}</Typography>
        </Box>
    );
};

export default ChatInterface;
