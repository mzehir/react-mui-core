import React from "react";
import Switch from "@mui/material/Switch";

const SwitchComp = (props) => {
  const { ...other } = props;
  return <Switch {...other} />;
};

export default SwitchComp;
