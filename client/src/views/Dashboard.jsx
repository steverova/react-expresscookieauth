import { Button } from "@mui/material";
import dashboard from "../assets/ilustrations/dashboard.svg";
import useDisclousure from "../hooks/useDisclousure";
import SimpleModalDialog from "../shared-components/SimpleModalDialog";
import NavBar from "./NavBar";

function Dashboard() {
  const { handleCloseComponent, handleOpenComponent, open } = useDisclousure();
  return (
    <div className="relative h-screen w-screen">
      <NavBar />

      <div className="flex flex-row justify-center p-12 h-4/6">
        <img src={dashboard} alt="Unauthorized" />
      </div>
      <div>
        <Button onClick={handleOpenComponent}>Open Modal</Button>
        <SimpleModalDialog handleClose={handleCloseComponent} open={open} />
      </div>
      <h1>
        This view can only be seen if the user is logged in, and the
        authentication was correct
      </h1>
    </div>
  );
}

export default Dashboard;
