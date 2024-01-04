import React from "react";

import FormControlLabelComp from "../FormControlLabel";
import SwitchComp from "../Switch";

const FormControlLabelSwitchComp = React.forwardRef((props, ref) => {
  const { label, ...other } = props;

  return (
    <FormControlLabelComp
      ref={ref}
      control={<SwitchComp {...other} />}
      label={label}
    />
  );
});

export default FormControlLabelSwitchComp;
