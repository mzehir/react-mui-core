import React, { forwardRef } from "react";

import MobileDatePickerComp from "../MobileDatePicker";

const BirthDatePickerComp = forwardRef(({ onChange, ...props }, ref) => {
  return <MobileDatePickerComp onChange={onChange} ref={ref} {...props} />;
});

export default BirthDatePickerComp;
