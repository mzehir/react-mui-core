import React, { forwardRef } from "react";
import LanguageUseContext from "../hooks/LanguageUseContext";

import TextFieldComp from "./TextField";

import MobileDatePicker from "@mui/lab/MobileDatePicker";

const MobileDatePickerComp = forwardRef(
  ({ label, labelIsTranslation = true, showToolbar, ...props }, ref) => {
    const { translate } = LanguageUseContext();

    return (
      <MobileDatePicker
        showToolbar={showToolbar ? showToolbar : false}
        label={labelIsTranslation ? translate(label) : label}
        okText={translate("componentsText.ok")}
        cancelText={translate("componentsText.cancel")}
        {...props}
        renderInput={(params) => <TextFieldComp {...params} {...props} />}
        ref={ref}
      />
    );
  }
);

export default MobileDatePickerComp;
