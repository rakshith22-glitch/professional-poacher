import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import UserCard from "./usercard";
import useFetchUserData from "./userfetch";
import { useNavigate } from 'react-router-dom';
const UserProfileComponent = () => {
    const navigate = useNavigate();
  const { userData, isLoading, error } = useFetchUserData();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredUsers = userData
    ? userData.users.filter(
        (user) =>
          user.username.toLowerCase().includes(searchTerm) ||
          user.email.toLowerCase().includes(searchTerm) ||
          user.phone.toLowerCase().includes(searchTerm) ||
          user.address.city.toLowerCase().includes(searchTerm)
      )
    : [];
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleCardClick = (user) => {
    setSelectedUserId(user.id);
    navigate(`/user/${user.id}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box sx={{ m: 2, marginTop: 10 }}>
      <TextField
        label="Find a Partner"
        variant="outlined"
        fullWidth
        onChange={handleSearchChange}
        sx={{ mb: 2 }}
      />
      <Grid container spacing={2} justifyContent="center">
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard
              user={user}
              onClick={handleCardClick}
              selected={user.id === selectedUserId}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserProfileComponent;
