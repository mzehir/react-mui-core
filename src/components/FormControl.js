import React from "react";
import FormControl from "@mui/material/FormControl";

const FormControlComp = React.forwardRef((props, ref) => {
  const { children, ...other } = props;

  return (
    <FormControl ref={ref} {...other}>
      {children}
    </FormControl>
  );
});

export default FormControlComp;

//*****************************************************************************************

FormControlComp.defaultProps = {
  size: "small",
  margin: "normal",
};
