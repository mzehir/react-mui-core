import React, { useState } from "react";
import TextFieldComp from "../TextField";
import {
  BootstrapDialog,
  BootstrapDialogTitle,
  BootstrapDialogContent,
} from "./BootstrapDialog";
import GoogleLocationSelectComp from "../googleLocationSelectComp.js/GoogleLocationSelectComp";
import {
  googleCoordinatesToString,
  stringToGoogleCoordinates,
} from "../../utils/helper/other";

const TextFieldGoogleLocationSelectDialog = React.forwardRef(
  ({ value, label, readOnly, fullWidth, onChange }, ref) => {
    const [locationSelectDialogCompOpen, setLocationSelectDialogCompOpen] =
      useState(false);

    return (
      <>
        <TextFieldComp
          ref={ref}
          fullWidth={fullWidth}
          readOnly={readOnly}
          label={label}
          value={value}
          onClick={() => setLocationSelectDialogCompOpen(true)}
        />

        {locationSelectDialogCompOpen && (
          <GoogleLocationSelectDialogComp
            open={locationSelectDialogCompOpen}
            setOpen={setLocationSelectDialogCompOpen}
            location={stringToGoogleCoordinates(value)}
            onClick={(event) => {
              let selectedLocation = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
              };

              let stringGoogleCoordinates =
                googleCoordinatesToString(selectedLocation);

              onChange(stringGoogleCoordinates);
            }}
          />
        )}
      </>
    );
  }
);

export default TextFieldGoogleLocationSelectDialog;

const GoogleLocationSelectDialogComp = ({
  open,
  setOpen,
  location,
  onClick,
}) => {
  return (
    <BootstrapDialog
      fullWidth={true}
      maxWidth="lg"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <BootstrapDialogTitle
        onClose={() => {
          setOpen(false);
        }}
      >
        componentsText.detailedPositionSelector
      </BootstrapDialogTitle>

      <BootstrapDialogContent>
        <GoogleLocationSelectComp location={location} onClick={onClick} />
      </BootstrapDialogContent>
    </BootstrapDialog>
  );
};
