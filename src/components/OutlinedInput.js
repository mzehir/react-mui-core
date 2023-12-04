import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import OutlinedInput from "@mui/material/OutlinedInput";

const OutlinedInputComp = (props) => {
  const { label, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <OutlinedInput
      label={isTranslation ? translate(label) : label}
      {...other}
    />
  );
};

export default OutlinedInputComp;
