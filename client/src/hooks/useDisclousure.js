import { useState } from "react";

const useDisclousure = () => {
  const [open, setOpen] = useState(false);
  const handleOpenComponent = () => {
    setOpen(true);
  };
  const handleCloseComponent = () => {
    setOpen(false);
  };
  return { open, handleOpenComponent, handleCloseComponent };
};

export default useDisclousure;
