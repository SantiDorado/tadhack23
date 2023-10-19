import * as React from 'react';
import { Form } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccountBoxIcon  from '@mui/icons-material/AccountBox';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const gridStyle = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  margen: '2px',
  borderRadius: "10px",
  boxShadow: "0 10px 20px rgba(2, 132, 199, 0.3), 0 10px 20px rgba(2, 132, 199, 0.3)",
  transform: "rotateY(10deg) rotateX(10deg)",
  height: "80%",
  display: "flex",
  justifyContent: "center",
  color: "white",
};

function SignInSide() {
  const theme = useTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid item 
            sx={{ 
              height: 'auto', 
              width: '80%',
              position: 'absolute',   
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              [theme.breakpoints.down('md')]: {
                width: '80%',  // Cambiar el ancho al 100% para tamaños de pantalla pequeños
              },
              }}
          >
            <div style={gridStyle}>
              <Grid
                item
                xs={false}
                sm={0}
                md={7}
                sx={{
                  backgroundImage: 'url(/logo.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                  backgroundSize: '80%',
                  backgroundPosition: 'center',
                }}
              />
              <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: '#0284c7' }} variant='rounded'>
                    <AccountBoxIcon sx={{ fontSize: 40, color: '#FFFFFF' }} />
                  </Avatar> 

                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
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
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Form method='post'>
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2, bgcolor: '#0284c7' }}
                      >
                          Sign In
                      </Button>
                    </Form>
                    <Grid container>
                      <Grid item xs>
                        <Link href="" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href={`/Blog`} variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}

export default SignInSide;
