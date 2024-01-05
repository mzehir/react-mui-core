import React from "react";
import Snackbar from "@mui/material/Snackbar";

const SnackbarComp = (props) => {
  const { children, ...other } = props;

  return <Snackbar {...other}>{children}</Snackbar>;
};

export default SnackbarComp;
