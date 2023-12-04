import * as React from "react";

import FormControlComp from "../FormControl";
import InputLabelComp from "../InputLabel";
import SelectComp from "../Select";
import OutlinedInputComp from "../OutlinedInput";
import BoxComp from "../Box";
import ChipComp from "../Chip";
import FormHelperTextComp from "../FormHelperText";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const selectCompRenderValueProps = (selected, options) => {
  return (
    <BoxComp sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
      {selected.map((value) => (
        <ChipComp
          key={value}
          label={options.filter((option) => option.value == value)[0].label}
        />
      ))}
    </BoxComp>
  );
};

export default function MultiSelect(props) {
  const {
    options = [],
    isLabelTranslation = true,
    label,
    labelId,
    value,
    onChange,
    ...other
  } = props;

  const handleChange = (event) => {
    const value = event.target.value;
    let result = typeof value === "string" ? value.split(",") : value;
    onChange(result);
  };

  return (
    <FormControlComp fullWidth>
      <InputLabelComp id={labelId}>{label}</InputLabelComp>
      <SelectComp
        options={options}
        isLabelTranslation={isLabelTranslation}
        labelId={labelId}
        value={value}
        onChange={handleChange}
        //
        multiple
        MenuProps={MenuProps}
        input={<OutlinedInputComp label={label} />}
        renderValue={(selected) =>
          selectCompRenderValueProps(selected, options)
        }
        {...other}
      />
      {other?.error && other?.helperText && (
        <FormHelperTextComp error={true}>{other.helperText}</FormHelperTextComp>
      )}
    </FormControlComp>
  );
}
