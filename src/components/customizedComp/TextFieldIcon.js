import React from "react";
import TextFieldComp from "../TextField";
import InputAdornment from "@mui/material/InputAdornment";

const TextFieldIcon = React.forwardRef((props, ref) => {
  const { inputProps, ...other } = props;

  return (
    <TextFieldComp
      ref={ref}
      InputProps={{
        ...(inputProps?.startAdornment
          ? {
              startAdornment: (
                <InputAdornment
                  position="start"
                  {...inputProps?.startAdornment?.props}
                >
                  {inputProps.startAdornment.comp}
                </InputAdornment>
              ),
            }
          : {}),

        ...(inputProps?.endAdornment
          ? {
              endAdornment: (
                <InputAdornment
                  position="end"
                  {...inputProps?.endAdornment?.props}
                >
                  {inputProps.endAdornment.comp}
                </InputAdornment>
              ),
            }
          : {}),
      }}
      {...other}
    />
  );
});

export default TextFieldIcon;
