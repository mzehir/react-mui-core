import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import Alert from "@mui/material/Alert";

const AlertComp = (props) => {
  const { children, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <Alert {...other}>
      {typeof children == "string" && isTranslation
        ? translate(children)
        : children}
    </Alert>
  );
};

export default AlertComp;
