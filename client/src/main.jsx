import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { purple, teal } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";
import { DialogProvider } from "./shared-components/AlertDialog/context/DialogContextProvider.jsx";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: purple,
  },
  shape: {
    borderRadius: 12, // Cambia este valor para ajustar el redondeo
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <DialogProvider>
      <App />
    </DialogProvider>
  </ThemeProvider>
);
