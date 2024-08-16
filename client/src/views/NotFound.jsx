import { Button, Typography } from "@mui/material";
import cat from "../assets/ilustrations/cat.svg";
import NavBar from "./NavBar";
import { ArrowBackIcon } from "../plugins/icons";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center p-12">
        <img
          style={{ objectFit: "fill", width: "70%" }}
          src={cat}
          alt="Unauthorized"
        />
        <Typography
          variant="h1"
          sx={{ fontSize: "5rem", fontWeight: "bolder", color: "#ff6584" }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: "2rem",
            fontWeight: "bolder",
            color: "#009688",
            textAlign: "center",
          }}
        >
          Ooops...
          <br />
          Page not found
        </Typography>

        <Button
          onClick={() => navigate("/dashboard")}
          startIcon={<ArrowBackIcon />}
          type="button"
          variant="outlined"
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
