import { useContext } from 'react'
import { DialogContext } from './context/DialogContextProvider'

const useAlertDialog = () => {
  const { AlertDialog: dialog } = useContext(DialogContext)

  const AlertDialog = {
    warning: ({ message, title }) => dialog.warning(message, title),
    success: ({ message, title }) => dialog.success(message, title),
    error: ({ message, title }) => dialog.error(message, title),
    info: ({ message, title }) => dialog.info(message, title),
    ok: ({ message, title }) => dialog.ok(message, title)

  }

  return AlertDialog
}

export default useAlertDialog
