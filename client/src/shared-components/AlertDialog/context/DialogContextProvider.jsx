import { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import AlertDialogComponent from '../Dialog';
import DialogManager from '../DialogManager';


export const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  const { isOpen, options, AlertDialog } = DialogManager();

  const contextValue = useMemo(
    () => ({
      isOpen,
      AlertDialog,
    }),
    [AlertDialog, isOpen]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      <AlertDialogComponent options={options} />
      {children}
    </DialogContext.Provider>
  );
};

DialogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
