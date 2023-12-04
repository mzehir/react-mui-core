import React from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import { Chip } from "@mui/material";

const ChipComp = (props) => {
  const { label, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return <Chip label={isTranslation ? translate(label) : label} {...other} />;
};

export default ChipComp;
