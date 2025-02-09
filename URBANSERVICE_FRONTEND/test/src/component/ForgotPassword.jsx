import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Typography, Card, CardContent, Container, TextField, Button, Grid, CssBaseline, Box, Alert, Snackbar } from "@mui/material";

export const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const submitHandler = async (data) => {
    try {
      const res = await axios.post('http://localhost:4000/users/user/isUserExist', data);
      if (res.data.flag === 1) {
        console.log("Email exists", res.data.data.email);
        setSubmitted(true);
        setTimeout(() => {
          navigate('/resetpassword', {
            state: { email: res.data.data.email }
          });
        }, 2000);
      } else {
        setError(true);
        setErrorMessage("Email address is not valid. Please enter a valid email address.");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
      setErrorMessage("Email address is not valid. Please enter a valid email address.");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ p: 4, borderRadius: 8, boxShadow: 4, bgcolor: '#B3C8CF' }}>
          <Card sx={{bgcolor:'#f0f0f0'}}>
            <CardContent>
              <Typography variant="h4" component="h1" align="center" gutterBottom>
                Forgot Password
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Lost your password? Please enter your email address. You will receive a OTP to create a new password via email.
              </Typography>
              {submitted ? (
                <Alert severity="info" sx={{ mb: 2 }}>
                  An email has been sent with instructions to reset your password.
                </Alert>
              ) : (
                <form onSubmit={handleSubmit(submitHandler)}>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type="email"
                        label="Email"
                        variant="outlined"
                        {...register("email", { required: true })}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2" align="center">
                        Remembered your password? <Link to="/login">Log in here</Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              )}
            </CardContent>
          </Card>
          <Box mt={2}>
            <Typography variant="body2" align="center">
              Security Tips: Choose a strong password with a combination of letters, numbers, and symbols.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="error" onClose={handleSnackbarClose}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};
