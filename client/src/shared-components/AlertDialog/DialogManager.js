import { useState } from 'react'
import Icons from './Icons'
import useDialogHandler from './DialogHandler'

const DialogManager = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { options, openDialog } = useDialogHandler()

  const openHandler = (value) => {
    setIsOpen(value)
  }

  const AlertDialog = {

    ok: async (message, title) =>
      openDialog({
        variant: 'primary',
        title,
        message,
        icon: Icons.primary,
        open: openHandler
      }),
    success: async (message, title) =>
      openDialog({
        variant: 'success',
        title,
        message,
        icon: Icons.success,
        open: openHandler
      }),
    warning: async (message, title) =>
      openDialog({
        variant: 'warning',
        title,
        message,
        icon: Icons.warning,
        open: openHandler
      }),

    error: async (message, title) =>
      openDialog({
        variant: 'error',
        title,
        message,
        icon: Icons.error,
        open: openHandler
      }),

    info: async (message, title) =>
      openDialog({
        variant: 'info',
        title,
        message,
        icon: Icons.info,
        open: openHandler
      })
  }

  return { isOpen, options, AlertDialog }
}

DialogManager.propTypes = {}

export default DialogManager
