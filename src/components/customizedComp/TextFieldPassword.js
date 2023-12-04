import React from "react";

import FormControlComp from "../FormControl";
import InputLabelComp from "../InputLabel";
import FormHelperTextComp from "../FormHelperText";

// import Input from "@mui/material/Input";
// import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//*****************************************************************************************

const TextFieldPassword = React.forwardRef(
  ({ fullWidth, margin, size, ...props }, ref) => {
    const [comp] = React.useState(OutlinedInput);
    const [variant] = React.useState("outlined");

    return (
      <React.Fragment>
        <FormControlComp
          ref={ref}
          variant={variant}
          margin={margin}
          size={size}
          fullWidth
        >
          <InputLabelComp error={props.error}>{props.label}</InputLabelComp>

          <DynamicComp Component={comp} {...props} />
        </FormControlComp>
      </React.Fragment>
    );
  }
);

export default TextFieldPassword;

//*****************************************************************************************

TextFieldPassword.defaultProps = {
  fullWidth: true,
  label: "Password",
  size: "small",
  margin: "normal",
};

//*****************************************************************************************

function DynamicComp({ Component, error, helperText, ...props }) {
  const inputRef = React.useRef(null);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Component
        ref={inputRef}
        type={showPassword ? "text" : "password"}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        {...props}
      />
      {error && helperText && (
        <FormHelperTextComp error={error}>{helperText}</FormHelperTextComp>
      )}
    </>
  );
}
