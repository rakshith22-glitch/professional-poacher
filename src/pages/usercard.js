import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  CardActions,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const StyledAvatar = styled(Avatar)({
  width: 56,
  height: 56,
});

const HighlightedCard = styled(Card)(({ theme, selected }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  backgroundColor: selected ? theme.palette.action.selected : "inherit",
}));

const UserCard = ({ user, onClick, selected }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    console.log(
      `Sending friend request to ${user.username} with message: ${message}`
    );
    // Implement your logic to send request here
    handleClose();
  };
  return (
    <HighlightedCard sx={{ maxWidth: 345, m: 2, position: "relative", cursor: 'pointer', '&:hover': { boxShadow: 6 } }} onClick={() => onClick(user)} selected={selected}>
      <CardActions sx={{ position: "absolute", top: 0, right: 0 }}>
        <IconButton onClick={handleOpen}>
          <PersonAddIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <StyledAvatar
            alt={user.username}
            src={user.image}
            sx={{ width: 56, height: 56 }}
          />
          <Typography gutterBottom variant="h5" component="div">
            {user.username}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Email: {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {user.phone}
        </Typography>
        {/* Add more user details here */}
      </CardContent>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Friend Request to {user.username}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}>Send Request</Button>
        </DialogActions>
      </Dialog>
      
    </HighlightedCard>
  );
};

export default UserCard;
