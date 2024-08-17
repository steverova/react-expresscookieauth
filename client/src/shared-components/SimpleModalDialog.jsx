/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

export default function SimpleModalDialog({
  handleClose = () => {},
  open = false,
  size = "xs",
  title = "This is a placeholder title",
  children = null,
  minHeight = 400,
}) {
  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth={size}
        aria-labelledby="customized-dialog-title"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="customized-dialog-title">{title}</DialogTitle>
        <DialogActions sx={{ p: 0 }}>
          <IconButton
            className="text-red-900 hover:bg-red-100"
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogContent style={{ minHeight }} dividers>
          {children}
        </DialogContent>
        <DialogActions>
          <div>
            <Button
              className="text-blue hover:bg-blue-100"
              autoFocus
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
