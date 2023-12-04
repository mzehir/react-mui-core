import React from "react";
import Drawer from "@mui/material/Drawer";

const DrawerComp = (props) => {
  const { children, ...other } = props;

  return <Drawer {...other}>{children}</Drawer>;
};

export default DrawerComp;
