import { useState } from 'react'
import { COLORS, DEFAULT_OPTIONS } from './helper'

const useDialogHandler = () => {
  const [options, setOptions] = useState(DEFAULT_OPTIONS)

  const openDialog = async (opt) =>
    new Promise((resolve) => {
      const handleClose = (result) => {
        resolve(result)
        opt.open(false)
      }

      setOptions({
        variant: opt.variant,
        title: opt.title,
        message: opt.message,
        icon: opt.icon,
        color: COLORS[opt.variant],
        handleClose
      })
      opt.open(true)
    })

  return { openDialog, options }
}

export default useDialogHandler
