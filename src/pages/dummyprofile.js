// DummyProfile.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CardContent,
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  CircularProgress,
  Card,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const HighlightedCard = styled(Card)(({ theme, selected }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  backgroundColor: selected ? theme.palette.action.selected : "inherit",
}));

const DummyProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
  };

  const handleChange = (event) => {
    console.log("Update userdata");
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error || !user) {
    return <p>There was an error loading the user profile.</p>;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" // This ensures the Box takes the full viewport height
    >
      <HighlightedCard
        sx={{
          maxWidth: 300,
          m: 2,
          position: "relative",
          cursor: "pointer",
          "&:hover": { boxShadow: 6 },
        }}
      >
        <CardContent
 
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              alt={user.name}
              src={user.image}
              sx={{ width: 100, height: 100 }}
            />
            {isEditMode ? (
              <>
                <TextField
                  label="Full Name"
                  name="fullname"
                  value={user.name}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  label="Email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  label="Phone Number"
                  name="phonenumber"
                  value={user.phone}
                  onChange={handleChange}
                  margin="normal"
                />
                <Button
                  style={{ marginTop: "1rem" }}
                  color="primary"
                  variant="contained"
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                <Typography variant="h5" style={{ margin: "20px 0" }}>
                  {user.name}
                </Typography>
                <Typography variant="body1">{user.email}</Typography>
                <Typography variant="body1">{user.phonenumber}</Typography>
                <Button
                  style={{ marginTop: "1rem" }}
                  color="primary"
                  variant="contained"
                  onClick={handleEditClick}
                >
                  Edit
                </Button>
              </>
            )}
          </Box>
        </CardContent>
      </HighlightedCard>
    </Box>
  );
};

export default DummyProfile;
