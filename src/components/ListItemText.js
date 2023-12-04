import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import ListItemText from "@mui/material/ListItemText";

const ListItemTextComp = (props) => {
  const { children, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <ListItemText {...other}>
      {typeof children == "string" && isTranslation
        ? translate(children)
        : children}
    </ListItemText>
  );
};

export default ListItemTextComp;
