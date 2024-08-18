/* eslint-disable react/prop-types */
import { Box, Container, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CustomDrawer({
  children,
  open = false,
  closeHandler,
  size = "70%",
  anchor = "right",
}) {
  return (
    <Drawer
      paperprops={{
        sx: {
          width: { sm: "100%", md: size },
          display: "flex",
          flexDirection: "column",
          borderLeft: "1rem solid #2c7a7b",
        },
      }}
      anchor={anchor}
      open={open}
    >
      <Box style={{ maxHeight: "100vh" }}>
        <Box className=" justify-end flex" >
          <IconButton
            variant="contained"
            color="primary"
            onClick={closeHandler}
            style={{ marginTop: "auto" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Container
          style={{ height: "90vh" }}
          maxWidth="lg"
          className=" overflow-y-auto"
        >
          {children}
        </Container>
      </Box>
    </Drawer>
  );
}

CustomDrawer.defaultProps = {
  size: "70%",
};

export default CustomDrawer;
