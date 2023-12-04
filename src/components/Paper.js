import React from "react";
import Paper from "@mui/material/Paper";

const PaperComp = (props) => {
  const { children, ...other } = props;

  return <Paper {...other}>{children}</Paper>;
};

export default PaperComp;
