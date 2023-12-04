import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import InputLabel from "@mui/material/InputLabel";

const InputLabelComp = (props) => {
  const { children, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <InputLabel {...other}>
      {typeof children == "string" && isTranslation
        ? translate(children)
        : children}
    </InputLabel>
  );
};

export default InputLabelComp;
