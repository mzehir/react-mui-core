import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const AlertComp = (props) => {
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

  return <Alert {...other}>{childrenTranslate(children)}</Alert>;
};

export const AlertTitleComp = (props) => {
  const { children, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <AlertTitle {...other}>
      {typeof children == "string" && isTranslation
        ? translate(children)
        : children}
    </AlertTitle>
  );
};
