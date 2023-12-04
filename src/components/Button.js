import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import Button from "@mui/material/Button";

const ButtonComp = (props) => {
  const { children, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  const childrenTranslate = (children) => {
    let result = [];
    if (Array.isArray(children)) {
      for (let i = 0; i < children.length; i++) {
        if (typeof children[i] == "string" && isTranslation) {
          result.push(translate(children[i]));
        } else {
          result.push(children[i]);
        }
      }
    } else {
      if (typeof children == "string" && isTranslation) {
        result.push(translate(children));
      } else {
        result.push(children);
      }
    }

    return result;
  };

  return <Button {...other}>{childrenTranslate(children)}</Button>;
};

export default ButtonComp;
