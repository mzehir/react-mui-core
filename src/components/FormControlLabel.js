import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import FormControlLabel from "@mui/material/FormControlLabel";

const FormControlLabelComp = React.forwardRef(
  ({ label, labelIsTranslation = true, ...props }, ref) => {
    const { translate } = LanguageUseContext();

    return (
      <FormControlLabel
        {...(label
          ? { label: labelIsTranslation ? translate(label) : label }
          : {})}
        ref={ref}
        {...props}
      />
    );
  }
);

export default FormControlLabelComp;
