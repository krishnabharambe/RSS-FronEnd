import { AppBar, Box, Button, createTheme, CssBaseline, Grid, InputAdornment, Link, Paper, TextField, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { apiCall_Login } from '../../Redux/apiCalls';
import CopyRight from '../Components/CopyRight';
import logo from './../../assets/RRS-logo.svg';

const theme = createTheme();


export default function Login() {

const [phone, setPhone] = useState("")
const [password, setPassword] = useState("")
const [User_PasswordError, setUser_PasswordError] = useState("")
const dispatch = useDispatch();
const globaluser = useSelector((state) => state.user);

const LoginSubmit = (event) => {
  // Preventing the page from reloading
  event.preventDefault();
  // Do something 
  console.log("Logging in user");
  if (!password) {
    setUser_PasswordError("Please enter Password")
  } else if (!phone) {
    setUser_PasswordError("Please enter Phone")
  } else {
    const phoneno = localStorage.getItem("phone");
    apiCall_Login(phone,password,dispatch);
  }
}
  return (
<div>
    {globaluser.isAuth ? <div> <Navigate to="/" /> </div>: <div>
    <ThemeProvider theme={theme}>
        
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Log In
          </Typography>
          <Link href="/register" color="common.white">Sign Up</Link>
        </Toolbar>
      </AppBar>

      <Grid container sx={{ height: '100vh' }} >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

<Typography component="h1" variant="h6">
            <img src={logo} alt="React Logo" width={300} />
            </Typography>

            <form onSubmit={LoginSubmit}>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="mobileNumber"
                label="Mobile Number"
                name="mobileNumber"
                autoFocus
                InputProps={{
                    startAdornment: <InputAdornment position="start">+91 </InputAdornment>
                  }}

                  onChange={(e) => setPhone(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />

{ globaluser.authFailureMsg ? <Typography color="red" sx={{ mt: 1, fontSize: 14 }}>{globaluser.authFailureMsg}</Typography> :<div>
                {User_PasswordError ? <Typography color="red" sx={{ mt: 1, fontSize: 14 }}>{User_PasswordError}</Typography> : ""}</div>}
               
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container marginBottom={4}>
                <Grid item xs>
                  <Link href="/accountRecovery" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <CopyRight />
            </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider> </div>}</div>
  );
}