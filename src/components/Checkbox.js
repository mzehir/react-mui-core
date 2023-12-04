import React from "react";
import Checkbox from "@mui/material/Checkbox";

const CheckboxComp = React.forwardRef(({ ...props }, ref) => {
  return <Checkbox ref={ref} {...props} />;
});

export default CheckboxComp;
