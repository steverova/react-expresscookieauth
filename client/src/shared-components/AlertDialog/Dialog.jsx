/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  Typography,
  Stack,
} from '@mui/material';
import { useContext } from 'react';
import { DialogContext } from './context/DialogContextProvider';

export default function AlertDialogComponent({ options }) {
  const { title, message, icon, color, handleClose, variant } = options;
  const { bg, bg_soft } = color;
  const { isOpen } = useContext(DialogContext)

  return (
    <Dialog
      fullWidth
      maxWidth='xs'
      open={isOpen}
      paperprops={{
        elevation: 0,
        sx: { borderRadius: '12px' },
      }}>
      <div className='p-4'>
        <div className='flex flex-row gap-5'>
          <div>
            <div className={`${bg_soft} p-2 rounded-full`}>{icon}</div>
          </div>
          <Stack spacing={1} direction='column'>
            <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
            <Typography className='text-justify text-lg '>{message}</Typography>
          </Stack>
        </div>
        <DialogActions>
          {variant === 'primary' ? (
            <div>
              <Button
                disableElevation
                className={`${bg}`}
                style={{ textTransform: 'none' }}
                variant='contained'
                color={variant}
                onClick={() => handleClose(true)}>
                Ok
              </Button>
            </div>
          ) : (
            <Stack spacing={2} direction='row'>
              <Button
                style={{ textTransform: 'none' }}
                color={variant}
                onClick={() => handleClose(false)}>
                Cancel
              </Button>
              <Button
                disableElevation
                className={`${bg}`}
                style={{ textTransform: 'none' }}
                variant='contained'
                color={variant}
                onClick={() => handleClose(true)}>
                Accept
              </Button>
            </Stack>
          )}
        </DialogActions>
      </div>
    </Dialog>
  );
}
