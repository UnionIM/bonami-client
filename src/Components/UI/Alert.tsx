import React, { Dispatch, SetStateAction, FC } from "react";
import { Alert as MuiAlert, Snackbar } from "@mui/material";
import { IAlert } from "../../Models/Bonami";

interface IMyAlert {
  state: IAlert;
  setState: Dispatch<SetStateAction<IAlert>>;
}

const Alert: FC<IMyAlert> = ({ state, setState }) => {
  const handleClose = () => {
    setState({
      isOpen: false,
      message: state.message,
      severity: state.severity,
    });
  };
  return (
    <Snackbar open={state.isOpen} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert
        onClose={handleClose}
        severity={state.severity}
        sx={{ width: "100%" }}
      >
        {state.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
