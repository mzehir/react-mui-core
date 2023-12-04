import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import Typography from "@mui/material/Typography";

const TypographyComp = (props) => {
  const { children, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <Typography {...other}>
      {typeof children == "string" && isTranslation
        ? translate(children)
        : children}
    </Typography>
  );
};

export default TypographyComp;
