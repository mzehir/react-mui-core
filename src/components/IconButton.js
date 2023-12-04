import React from "react";
import IconButton from "@mui/material/IconButton";

const IconButtonComp = React.forwardRef((props, ref) => {
  const { children, ...other } = props;

  return (
    <IconButton ref={ref} {...other}>
      {children}
    </IconButton>
  );
});

export default IconButtonComp;
