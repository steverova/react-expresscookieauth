import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CssBaseline,
} from "@mui/material";
import useAuth from "../auth/useAuth";
import welcome from "../assets/ilustrations/welcome.svg";
import CatchaWidget from "../plugins/Catcha";

const Login = () => {
  const { singUp } = useAuth();
  const [turntileToken, setTurntileToken] = useState()

  const [formValues, setFormValues] = useState({
    email: "steverova0594@gmail.com",
    password: "Hello$1234",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await singUp(formValues);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      {/* Columna Izquierda (Imagen) */}
      <Grid
  item
  xs={false}
  sm={false}
  md={6}
  lg={8}
  sx={{
    display: { xs: "none", md: "flex" },
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <img className="h-3/5" src={welcome} alt="welcomeimage" />
</Grid>

      {/* Columna Derecha (Formulario) */}
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={4}
        sx={{
          backgroundColor: "#2c7a7b",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Box
          sx={{
            boxShadow: 4,
            width: "100%",
            maxWidth: 400,
            backgroundColor: "#f2f2f2",
            borderRadius: "12px",
            p: 5,
          }}
        >
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              
              value={formValues.email}
              onChange={handleChange}
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
              value={formValues.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <CatchaWidget onSuccess={setTurntileToken}/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Login
            </Button>
            {/* {turntileToken} */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
