import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMutation } from "@apollo/client";
import { CHECK_USER } from "../graphql/mutation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigate = useNavigate();
  const [logIn, { loading, error }] = useMutation(CHECK_USER);
  const [token, setToken] = useState(null);

  const onSubmit = async (data) => {
    // Add your login logic here using the data object
    console.log("Login successful", data);
    try {
      // Call the signUp mutation here
      const result = await logIn({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const { token } = result.data; // Modify this according to your actual token retrieval method

      // Store the token in localStorage
      localStorage.setItem("authToken", token);

      // Set the token in component state for further usage if needed
      setToken(token);
      // Handle success
      console.log("LogIn successful", result);
      navigate("/");
    } catch (error) {
      // Handle error and set form errors if necessary
      console.error("Error while loging in", error);
      // Example: Setting error for a specific field
      setError("email", {
        type: "manual",
        message: "Error occurred during login. Please try again.",
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
        Login
      </Typography>
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
        fullWidth
        type="password"
        label="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        margin="normal"
        sx={{ mt: 2 }}
      />
      <FormControlLabel
        control={<Checkbox {...register("rememberMe")} color="primary" />}
        label="Remember Me"
        sx={{ mt: 1, textAlign: "left" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Login
      </Button>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Link href="#" variant="body2">
          Forgot Password?
        </Link>
        <Box mt={1}>
          <Link href="/signup" variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
