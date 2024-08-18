import { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CssBaseline,
  Alert,
  Collapse,
} from "@mui/material";
import useAuth from "../auth/useAuth";
import welcome from "../assets/ilustrations/welcome.svg";
import CatchaWidget from "../plugins/Catcha";
import { useLoginNotificationsStore } from "../store/useLoginNotificationsStore";

const Login = () => {
  const { singUp, validateTurnsTileToken } = useAuth();
  const [turnstileToken, setTurnstileToken] = useState(null);
  const catchaWidgetRef = useRef(null);
  const { payload, notify} = useLoginNotificationsStore();

  const [formValues, setFormValues] = useState({
    email: "steverova0594@gmail.com",
    password: "Hello$1234",
  });

  useEffect(() => {
    console.log("payload", payload);
  }, [payload]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await validateTurnsTileToken(turnstileToken);
    if (!response.data.content.success) {
      setTurnstileToken(null);
      await catchaWidgetRef?.current.resetWidget();
      return;
    }
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
              disabled={!turnstileToken}
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
              disabled={!turnstileToken}
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
            <CatchaWidget ref={catchaWidgetRef} onSuccess={setTurnstileToken} />
            <Button
              disabled={!turnstileToken}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Login
            </Button>
          </Box>

          <Collapse in={payload.show && payload.type === 404}>
            <Alert onClose={() => notify("", false, null)} className="my-6" variant="filled" severity="error">
              {payload.message}
            </Alert>
          </Collapse>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
