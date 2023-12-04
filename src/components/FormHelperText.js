import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import FormHelperText from "@mui/material/FormHelperText";

const FormHelperTextComp = (props) => {
  const { children, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <FormHelperText {...other}>
      {typeof children == "string" && isTranslation
        ? translate(children)
        : children}
    </FormHelperText>
  );
};

export default FormHelperTextComp;
