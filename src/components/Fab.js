import React from "react";
import Fab from "@mui/material/Fab";

const FabComp = (props) => {
  const { children, ...other } = props;

  return <Fab {...other}>{children}</Fab>;
};

export default FabComp;
