import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Snackbar,
  IconButton,
  Grid,
  Paper,
} from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginSVG from "../../assets/svgs/loginDoor.svg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    // Here you would typically send the data to your backend API for authentication
    // For this example, we'll just simulate a successful login
    console.log("Login data:", formData);
    setSuccess(true);
    setError("");

    // Reset form after successful login
    setFormData({
      email: "",
      password: "",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "600px",
              objectFit: "cover",
            }}
            alt="Login"
            src={loginSVG}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              width: "80%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Log In
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 3, width: "100%" }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </IconButton>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => navigate("/app/dashboard")}
                >
                  Log In
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError("")}
        message={error}
      />
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
        message="Login successful!"
      />
    </Container>
  );
};

export default LoginPage;
