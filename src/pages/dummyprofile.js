import usersData from './user/user.json';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  CircularProgress,
  Grid,
  Stack,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  margin: 'auto',
  marginTop: theme.spacing(10),
  padding: theme.spacing(2),
  boxShadow: theme.shadows[3],
}));

const StyledAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  margin: 'auto',
});

const DummyProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const foundUser = usersData.find((user) => user.id === userId);
      setUser(foundUser);
      setLoading(false);
    }, 1000);
  }, [userId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    console.log(`Sending friend request to ${user.name} with message: ${message}`);
    // Implement your logic to send request here
    handleClose();
  };

  if (!user) {
    return (
      <Typography variant="h6" color="error" textAlign="center">
        User profile not found.
      </Typography>
    );
  }

  return (
    <StyledCard sx={{ marginTop: 20 }}>
      <StyledAvatar
        alt={user.name}
        src={user.image || "/default-profile.png"}
      />
      <Stack direction="column" alignItems="center" style={{ marginTop: 2 }}>
        <IconButton onClick={handleOpen}>
          <AddIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          Add Friend
        </Typography>
      </Stack>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Email: {user.email}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Phone: {user.phone}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Location: {user.address.city}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Age: {user.age} | Sex: {user.sex}
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <Stack direction="column" alignItems="center">
                <PersonIcon />
                <Typography variant="body2" color="text.secondary">
                  Singles: {user.rating.singles}
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="column" alignItems="center">
                <GroupIcon />
                <Typography variant="body2" color="text.secondary">
                  Doubles: {user.rating.doubles}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Friend Request to {user.name}</DialogTitle>
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
    </StyledCard>
  );
};

export default DummyProfile;