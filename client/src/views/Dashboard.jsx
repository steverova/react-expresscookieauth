import { Button } from "@mui/material";
import dashboard from "../assets/ilustrations/dashboard.svg";
import useDisclousure from "../hooks/useDisclousure";
import SimpleModalDialog from "../shared-components/SimpleModalDialog";
import NavBar from "./NavBar";
import useAlertDialog from "../shared-components/AlertDialog/useAlertDialog";

function Dashboard() {
  const { handleCloseComponent, handleOpenComponent, open } = useDisclousure();
  const AlertDialog = useAlertDialog();

  const handleOpenAlert = async () => {
    await AlertDialog.success({
      message: "This is a success alert",
      title: "Success",
    });
  };

  return (
    <div className="relative h-screen w-screen">
      <NavBar />

      <div className="flex flex-row justify-center p-12 h-4/6">
        <img src={dashboard} alt="Unauthorized" />
      </div>
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
        <Button onClick={handleOpenComponent}>Open Modal</Button>

        <Button onClick={handleOpenAlert}>success alert</Button>
      </div>
      <SimpleModalDialog handleClose={handleCloseComponent} open={open}>
        <h1>This is a modal</h1>
      </SimpleModalDialog>
      <h1>
        This view can only be seen if the user is logged in, and the
        authentication was correct
      </h1>
    </div>
  );
}

export default Dashboard;
