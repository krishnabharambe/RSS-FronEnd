import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../views/Copyright';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputAdornment from "@mui/material/InputAdornment";
import { apiCall_Register, apiCall_ValidateOtp, apiCall_ValidatePhone } from '../../Redux/apiCalls';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router';

const theme = createTheme();

export default function AccountRecovery() {

    const [phone, setphone] = React.useState<number | string>()
    const [phoneErrorMsg, setpphoneErrorMsg] = React.useState<string>()
    const [Otp, setOtp] = React.useState<string>()
    const [otpSentError, setotpSentError] = React.useState<string>()
    const [User_Password, setUser_Password] = React.useState<string>("");
    const [User_PasswordError, setUser_PasswordError] = React.useState<string>()


    return (
        <div>
            <ThemeProvider theme={theme}>
{/* //Validation of phone */}
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Account Recovery
                </Typography>

                <Link href="/login" color="common.white">Log In</Link>

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

                <Box sx={{ fontWeight: 'regular', mx: 3, mt: 2, textAlign: 'left' }} >
                  <Typography variant="h6">
                    Forgot Password
                  </Typography>
                  <Typography sx={{ mt: 2, fontSize: 14 }} color="GrayText">
                  Reset password in two quick steps
                  </Typography>
                </Box>

                <Box
                  sx={{
                    my: 2,
                    mx: 3,
                    alignItems: 'center',
                  }}
                >
                  <form >
                    <Box >
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
                        onChange={(e) => setphone(e.target.value)}
                      />

 <Typography color="gray" sx={{ mt: 1, fontSize: 14 }}>By proceeding, you agree to our <a href="">Terms of Serice</a>  and <a href="">Privacy & Legal Policy</a></Typography>

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}

                      >
                        Proceed
                      </Button>
                      <Copyright />
                    </Box>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
        </div>
    )
}
