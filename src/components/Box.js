import React from "react";
import Box from "@mui/material/Box";

const BoxComp = (props) => {
  const { children, ...other } = props;

  return <Box {...other}>{children}</Box>;
};

export default BoxComp;
