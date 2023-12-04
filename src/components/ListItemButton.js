import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import ListItemButton from "@mui/material/ListItemButton";

const ListItemButtonComp = (props) => {
  const { children, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <ListItemButton {...other}>
      {typeof children == "string" && isTranslation
        ? translate(children)
        : children}
    </ListItemButton>
  );
};

export default ListItemButtonComp;
