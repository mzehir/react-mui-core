import React from "react";
import Slide from "@mui/material/Slide";

const SlideComp = (props) => {
  const { ...other } = props;
  return <Slide {...other} />;
};

export default SlideComp;
