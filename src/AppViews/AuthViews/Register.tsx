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


export default function Register() {

  const [phone, setphone] = React.useState<number | string>()
  const [phoneErrorMsg, setpphoneErrorMsg] = React.useState<string>()
  const [Otp, setOtp] = React.useState<string>()
  const [otpSentError, setotpSentError] = React.useState<string>()
  const [User_Password, setUser_Password] = React.useState<string>("");
  const [User_PasswordError, setUser_PasswordError] = React.useState<string>()
  const dispatch = useDispatch();
  // const globalState = useSelector((state) => state);
  const globaluser = useSelector((state: RootStateOrAny) => state.user);
  //validatePhone
  const ValidatePhoneSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    const regex = new RegExp("^[7-9][0-9]{9}$");
    // Do something 
    if (!phone) {
      setpphoneErrorMsg("Please enter mobile no.")
    } else if (!regex.test(phone.toString())) {
      setpphoneErrorMsg("Please enter Validate mobile number.");
    } else {
      localStorage.setItem("phone", phone.toString());
      apiCall_ValidatePhone(phone,dispatch);
      setphone("")
    }
  }

  const ValidatePhoneOtpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    const regex = new RegExp("^[0-9]{4}$");
    // Do something 
    if (!Otp) {
      setotpSentError("Please enter OTP")
    } else if (!regex.test(Otp.toString())) {
      setotpSentError("InValid OTP. Please enter Valid OTP");
    } else {
      const phoneno = localStorage.getItem("phone");
      console.log("validating Otp", phone, Otp)
      apiCall_ValidateOtp(phoneno,Otp,dispatch);
    }
  }


  const RegisterformSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    // Do something 
    console.log("Registering user");
    if (!User_Password) {
      setUser_PasswordError("Please enter Password")
    } else {
      const phoneno = localStorage.getItem("phone");
      apiCall_Register(phoneno,User_Password,dispatch);
    }
  }

  return (
    <div>
{ globaluser.regValidation ? <Navigate to="/" />: 
    <div>

      {globaluser.otpValidation ? <ThemeProvider theme={theme}>

        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sign Up
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
                Set Password
              </Typography>
              <Typography sx={{ mt: 2, fontSize: 14 }} color="GrayText">
                Create/set password to access your account. Otp Verified for Mobile number +91 {localStorage.getItem("phone")}
              </Typography>
            </Box>

            <Box
              sx={{
                my: 2,
                mx: 3,
                alignItems: 'center',
              }}
            >
 <form onSubmit={RegisterformSubmit}>
              <Box  >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setUser_Password(e.target.value)}
                />
{ globaluser.regValidation ? <Typography color="red" sx={{ mt: 1, fontSize: 14 }}>{globaluser.registrationError}</Typography> :<div>
                {User_PasswordError ? <Typography color="red" sx={{ mt: 1, fontSize: 14 }}>{User_PasswordError}</Typography> : ""}</div>}
                <Typography color="gray" sx={{ mt: 1, fontSize: 14 }}>By proceeding, you agree to our <a href="">Terms of Serice</a>  and <a href="">Privacy & Legal Policy</a></Typography>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Save and Login
                </Button>

                <Copyright />
              </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider> : <div>

        {globaluser.OtpSent ? <ThemeProvider theme={theme}>

          <AppBar position="static">
            <Toolbar>
              <IconButton
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Sign Up
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
                  Enter One Time Password(OTP)
                </Typography>
                <Typography sx={{ mt: 2, fontSize: 14 }} color="GrayText">
                  Otp has been sent to your mobile no. +91 {localStorage.getItem("phone")}
                </Typography>
              </Box>

              <Box
                sx={{
                  my: 2,
                  mx: 3,
                  alignItems: 'center',
                }}
              >
                <form onSubmit={ValidatePhoneOtpSubmit}>
                  <Box   >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="otp"
                      label="OTP"
                      name="otp"
                      autoFocus
                      defaultValue=""
                      onChange={(e) => setOtp(e.target.value)}
                    />
{globaluser.otpValidationError ? <Typography color="red" sx={{ mt: 1, fontSize: 14 }}>{globaluser.otpValidationError}</Typography>: <div>
{otpSentError ? <Typography color="red" sx={{ mt: 1, fontSize: 14 }}>{otpSentError}</Typography> : ""}</div>}
                    

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
        </ThemeProvider> :
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
                  Sign Up
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
                    Sign Up
                  </Typography>
                  <Typography sx={{ mt: 2, fontSize: 14 }} color="GrayText">
                    Sign Up to track your orders, view ypur wish list or reorder past services.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    my: 2,
                    mx: 3,
                    alignItems: 'center',
                  }}
                >
                  <form onSubmit={ValidatePhoneSubmit}>
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

{globaluser.otpSentError ? <div><Typography color="red" sx={{ mt: 1, fontSize: 14 }}>{globaluser.otpSentError}</Typography></div> : <div>

                      
                      {phoneErrorMsg ? <Typography color="red" sx={{ mt: 1, fontSize: 14 }}>{phoneErrorMsg}</Typography> : ""} </div>}
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
        }

      </div>}

    </div >

      }
</div>

  );
}