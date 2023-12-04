import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import Tooltip from "@mui/material/Tooltip";

const TooltipComp = (props) => {
  const { children, title, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <Tooltip title={isTranslation ? translate(title) : title} {...other}>
      {children}
    </Tooltip>
  );
};

export default TooltipComp;
