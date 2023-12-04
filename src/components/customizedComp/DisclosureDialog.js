import React from "react";
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from "./BootstrapDialog";
import TypographyComp from "../Typography";
import ButtonComp from "../Button";

const DisclosureDialogComp = ({ open, setOpen, text }) => {
  return (
    <BootstrapDialog maxWidth="xs" open={open} onClose={() => setOpen(false)}>
      <BootstrapDialogTitle onClose={() => setOpen(false)}>
      componentsText.disclosure
      </BootstrapDialogTitle>

      <BootstrapDialogContent>
        <TypographyComp>{text}</TypographyComp>
      </BootstrapDialogContent>

      <BootstrapDialogActions>
        <ButtonComp
          fullWidth
          variant="outlined"
          color="primary"
          onClick={() => setOpen(false)}
        >
          componentsText.ok
        </ButtonComp>
      </BootstrapDialogActions>
    </BootstrapDialog>
  );
};

export default DisclosureDialogComp;
