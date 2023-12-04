import React from "react";

import FormControlLabelComp from "../FormControlLabel";
import CheckboxComp from "../Checkbox";

const FormControlLabelCheckboxComp = React.forwardRef((props, ref) => {
  const { label, ...other } = props;

  return (
    <FormControlLabelComp
      ref={ref}
      control={<CheckboxComp {...other} />}
      label={label}
    />
  );
});

export default FormControlLabelCheckboxComp;
