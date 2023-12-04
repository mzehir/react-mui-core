import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import { ListItemIcon, MenuItem } from "@mui/material";

const MenuItemComp = (props) => {
  const { children, Icon, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <MenuItem {...other}>
      {Icon && (
        <ListItemIcon>
          <Icon fontSize="small" />
        </ListItemIcon>
      )}

      {typeof children == "string" && isTranslation
        ? translate(children)
        : children}
    </MenuItem>
  );
};

export default MenuItemComp;
