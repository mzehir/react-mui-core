import React, { forwardRef } from "react";

import FormControlComp from "../FormControl";
import InputLabelComp from "../InputLabel";
import SelectComp from "../Select";
import TypographyComp from "../Typography";
import FormHelperTextComp from "../FormHelperText";

const selectCompRenderValueProps = (selected, options) => {
  return (
    <TypographyComp>
      {options.filter((option) => option.value == selected)[0].label}
    </TypographyComp>
  );
};

const FormControlSelectComp = forwardRef((props, ref) => {
  const {
    options = [],
    isLabelTranslation = true,
    label,
    labelId,
    value,
    onChange,
    helperText,
    ...other
  } = props;

  return (
    <FormControlComp fullWidth>
      <InputLabelComp id={labelId}>{label}</InputLabelComp>

      <SelectComp
        options={options}
        isLabelTranslation={isLabelTranslation}
        label={label}
        labelId={labelId}
        value={value}
        onChange={onChange}
        renderValue={(selected) =>
          selectCompRenderValueProps(selected, options)
        }
        ref={ref}
        {...other}
      />
      {other?.error && helperText && (
        <FormHelperTextComp error={true}>{helperText}</FormHelperTextComp>
      )}
    </FormControlComp>
  );
});

export default FormControlSelectComp;
