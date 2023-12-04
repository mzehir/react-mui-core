import * as React from "react";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const VisuallyHiddenInputComp = ({ id, accept, onChange }) => {
  return (
    <VisuallyHiddenInput
      id={id}
      type="file"
      accept={accept}
      onChange={onChange}
    />
  );
};

export default VisuallyHiddenInputComp;
