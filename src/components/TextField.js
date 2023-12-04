import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import TextField from "@mui/material/TextField";

const TextFieldComp = React.forwardRef(
  (
    {
      label,
      labelIsTranslation = true,
      value,
      valueIsTranslation = false,
      helperText,
      helperTextIsTranslation = true,
      ...props
    },
    ref
  ) => {
    const { translate } = LanguageUseContext();

    return (
      <TextField
        ref={ref}
        {...(label
          ? { label: labelIsTranslation ? translate(label) : label }
          : {})}
        {...(value || value === ""
          ? { value: valueIsTranslation ? translate(value) : value }
          : {})}
        {...(helperText
          ? {
              helperText: helperTextIsTranslation
                ? translate(helperText)
                : helperText,
            }
          : {})}
        {...props}
      />
    );
  }
);

TextFieldComp.defaultProps = {
  fullWidth: true,
  variant: "outlined",
  label: "",
  size: "small",
  margin: "normal",
};

export default TextFieldComp;
