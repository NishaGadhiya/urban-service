// import axios from 'axios';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Typography, TextField, Button, Grid, Card, CardContent, CssBaseline, Container, Snackbar } from "@mui/material";
// import MuiAlert from '@mui/material/Alert';

//  export const ResetPassword = () => {
//   const location = useLocation();
//   const { register, handleSubmit } = useForm({
//     defaultValues: {
//       email: location?.state?.email,
//     }
//   });
//   const navigate = useNavigate();
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');
//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setSnackbarOpen(false);
//   };

//   const submitHandler = async (data) => {
//     const dataToSend = {
//       email: data.email,
//       password: data.password,
//       otp: data.otp,
//       time: new Date().getTime(),
//     };
//     try {
//       const res = await axios.post("http://localhost:4000/users/user/resetpassword", dataToSend);
//       if (res.data.flag === 1) {
//         setSnackbarSeverity('success');
//         setSnackbarMessage('Password updated successfully!');
//         setSnackbarOpen(true);
//         setTimeout(() => {
//           navigate('/login');
//         }, 2000);
//       } else {
//         setSnackbarSeverity('error');
//         setSnackbarMessage(res.data.message || 'Password reset failed');
//         setSnackbarOpen(true);
//         navigate('/login')
//       }
//     } catch (error) {
//       console.error("Error resetting password:", error);
//       setSnackbarSeverity('error');
//       setSnackbarMessage('Password reset failed');
//       setSnackbarOpen(true);
//     }
//   };
  

//   return (
//     <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Card sx={{ borderRadius: 12, boxShadow: 8 }}>
//           <CardContent sx={{ backgroundColor: "#f9f9f9", padding: 4 }}>
//             <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
//               Reset Password
//             </Typography>
//             <form onSubmit={handleSubmit(submitHandler)}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     type="text"
//                     label="OTP"
//                     {...register("otp", { required: true })}
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     type="email"
//                     label="Email"
//                     {...register("email")}
//                     disabled
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     type="password"
//                     label="Password"
//                     {...register("password", { required: true })}
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Button type="submit" variant="contained" color="primary" fullWidth>
//                     Submit
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </CardContent>
//         </Card>
//       </Container>
//       <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
//         <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
//           {snackbarMessage}
//         </MuiAlert>
//       </Snackbar>
//     </div>
//   );
// };


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Grid, Card, CardContent, CssBaseline, Container, Snackbar, IconButton, InputAdornment, Divider } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

export const ResetPassword = () => {
  const location = useLocation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: location?.state?.email,
    }
  });
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const submitHandler = async (data) => {
    const dataToSend = {
      email: data.email,
      password: data.password,
      otp: data.otp,
      time: new Date().getTime(),
    };
    try {
      const res = await axios.post("http://localhost:4000/users/user/resetpassword", dataToSend);
      if (res.data.flag === 1) {
        setSnackbarSeverity('success');
        setSnackbarMessage('Password updated successfully!');
        setSnackbarOpen(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setSnackbarSeverity('error');
        setSnackbarMessage(res.data.message || 'Password reset failed');
        setSnackbarOpen(true);
        navigate('/login');
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setSnackbarSeverity('error');
      setSnackbarMessage('Password reset failed');
      setSnackbarOpen(true);
      navigate('/login');
    }
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Card sx={{ borderRadius: 12, boxShadow: 8 }}>
          <CardContent sx={{ backgroundColor: "#f9f9f9", padding: 4 }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
              Reset Password
            </Typography>
            <form onSubmit={handleSubmit(submitHandler)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    {...register("email")}
                    disabled
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="text"
                    label="OTP"
                    {...register("otp", { required: true })}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    {...register("password", { required: true })}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePasswordVisibility}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" align="center" gutterBottom>
              Password Policy Information:
              <br />
              Your password should be at least 8 characters long and contain a mix of uppercase and lowercase letters, numbers, and special characters.
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};


