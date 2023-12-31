import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from "../graphql/mutation"; // Replace with your actual path
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [signUp, { loading, error }] = useMutation(SIGNUP_MUTATION);

  const onSubmit = async (data) => {
    try {
      // Call the signUp mutation here
      const result = await signUp({
        variables: {
          email: data.email,
          password: data.password,
          fullname: data.fullname,
          phonenumber: data.phonenumber,
        },
      });

      // Handle success
      console.log("SignUp successful", result);
      navigate("/")
    } catch (error) {
      // Handle error and set form errors if necessary
      console.error("Error while signing up", error);
      // Example: Setting error for a specific field
      setError("email", {
        type: "manual",
        message: "Error occurred during signup. Please try again.",
      });
    }
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
        placeholder="Full Name"
        fullWidth
        label="Full Name"
        {...register("fullname", { required: true, maxLength: 80 })}
        margin="normal"
        error={!!errors.fullname}
        helperText={errors.fullname && "Full Name is required"}
      />
      <TextField
        required
        type="text"
        placeholder="Email"
        fullWidth
        label="Email"
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+\.\S+$/i,
        })}
        margin="normal"
        error={!!errors.email}
        helperText={errors.email && "Enter a valid email address"}
      />
      <TextField
        required
        type="password"
        fullWidth
        label="Password"
        {...register("password", { required: true })}
        margin="normal"
        error={!!errors.password}
        helperText={errors.password && "Password is required"}
      />
      <TextField
        required
        type="tel"
        fullWidth
        label="Phone Number"
        {...register("phonenumber", {
          required: true,
          pattern: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
          minLength: 6,
          maxLength: 12,
        })}
        margin="normal"
        error={!!errors.phonenumber}
        helperText={errors.phonenumber && "Enter a valid phone number"}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </Button>
      {error && (
        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
          Error: {error.message}
        </Typography>
      )}
    </Box>
  );
}
