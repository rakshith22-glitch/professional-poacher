import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "../assets/icon.jpeg";

const Home = () => {

  return (
    <Box
      sx={{
        maxWidth: "370px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "25vh",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "white",
      }}
    >
      <IconButton size="large" aria-label="new notifications" color="inherit">
        <img src={HomeIcon} alt="Icon" width="44" height="44" />
      </IconButton>
      Welcome to Professional Poacher
      <IconButton size="large" aria-label="new notifications" color="inherit">
        <img src={HomeIcon} alt="Icon" width="44" height="44" />
      </IconButton>
    </Box>
  );
};

export default Home;
