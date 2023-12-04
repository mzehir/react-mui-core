import React from "react";
import TextFieldComp from "../TextField";

import { PatternFormat } from "react-number-format";

const PatternFormatComp = ({ value, onChange, format, mask, ...rest }) => {
  return (
    <PatternFormat
      customInput={TextFieldComp}
      {...rest}
      value={value}
      format={format}
      mask={mask}
      onValueChange={(e) => {
        onChange(e.value);
      }}
    />
  );
};

export default PatternFormatComp;
