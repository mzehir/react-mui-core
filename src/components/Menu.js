import React from "react";
import { Menu } from "@mui/material";

const MenuComp = (props) => {
  const { children, ...other } = props;
  return <Menu {...other}>{children}</Menu>;
};

export default MenuComp;
