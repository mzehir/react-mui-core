import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import Link from "@mui/material/Link";

const LinkComp = (props) => {
  const { children, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <Link {...other}>
      {typeof children == "string" && isTranslation
        ? translate(children)
        : children}
    </Link>
  );
};

export default LinkComp;
