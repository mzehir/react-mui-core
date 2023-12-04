import React, { forwardRef } from "react";

import MenuItemComp from "./MenuItem";

import Select from "@mui/material/Select";

const SelectComp = forwardRef((props, ref) => {
  const {
    options = [],
    isLabelTranslation = true,
    label,
    labelId,
    value,
    onChange,
    ...other
  } = props;

  return (
    <Select
      ref={ref}
      labelId={labelId}
      label={label}
      value={value}
      onChange={onChange}
      {...other}
    >
      {options.map((item, index) => (
        <MenuItemComp
          key={index}
          value={item.value}
          isTranslation={isLabelTranslation}
        >
          {item.label}
        </MenuItemComp>
      ))}
    </Select>
  );
});

export default SelectComp;
