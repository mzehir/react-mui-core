import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const ButtonLoadingComp = (props) => {
  const { children, ...other } = props;

  return <LoadingButton {...other}>{children}</LoadingButton>;
};

export default ButtonLoadingComp;
