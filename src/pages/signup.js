import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Add your login logic here using the data object
    console.log("SignUp successful", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: "500px",
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
      <Typography variant="h5" component="div" sx={{ mb: 2 }}>
        SignUp
      </Typography>
      <TextField
        required
        type="text"
        placeholder="Email"
        fullWidth
        label="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        margin="normal"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <TextField
        required
        type="text"
        placeholder="Full name"
        fullWidth
        label="Full name"
        {...register("Full name", { required: true, maxLength: 80 })}
        margin="normal"
      />
      <TextField
        required
        fullWidth
        type="tel"
        label="Phone number"
        placeholder="Number"
        {...register("Phone number", {
          required: true,
          pattern: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
          minLength: 6,
          maxLength: 12,
        })}
        margin="normal"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        SignUp
      </Button>
    </Box>
  );
}
