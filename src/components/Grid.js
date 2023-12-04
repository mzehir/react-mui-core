import React from "react";
import Grid from "@mui/material/Grid";

const GridComp = (props) => {
  const { children, ...other } = props;

  return <Grid {...other}>{children}</Grid>;
};

export default GridComp;
