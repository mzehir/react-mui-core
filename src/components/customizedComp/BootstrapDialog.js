import React from "react";
import { styled } from "@mui/material/styles";
import LanguageUseContext from "../../hooks/LanguageUseContext";

import {
  DialogComp,
  DialogTitleComp,
  DialogContentComp,
  DialogActionsComp,
} from "../Dialog";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

//***************BootstrapDialog***************\\
//***************BootstrapDialog***************\\
//***************BootstrapDialog***************\\
//***************BootstrapDialog***************\\
//***************BootstrapDialog***************\\
//***************BootstrapDialog***************\\
//***************BootstrapDialog***************\\
//***************BootstrapDialog***************\\
//***************BootstrapDialog***************\\
//***************BootstrapDialog***************\\

export const BootstrapDialog = styled(DialogComp)(({ theme, ...props }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  ...props,
}));

//***************BootstrapDialogTitle***************\\
//***************BootstrapDialogTitle***************\\
//***************BootstrapDialogTitle***************\\
//***************BootstrapDialogTitle***************\\
//***************BootstrapDialogTitle***************\\
//***************BootstrapDialogTitle***************\\
//***************BootstrapDialogTitle***************\\
//***************BootstrapDialogTitle***************\\
//***************BootstrapDialogTitle***************\\
//***************BootstrapDialogTitle***************\\

export const BootstrapDialogTitle = (props) => {
  const { children, onClose, isTranslation = true, ...other } = props;
  const { translate } = LanguageUseContext();

  return (
    <DialogTitleComp sx={{ m: 0, p: 2 }} {...other}>
      {typeof children == "string" && isTranslation
        ? translate(children)
        : children}

      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitleComp>
  );
};

//***************BootstrapDialogContent***************\\
//***************BootstrapDialogContent***************\\
//***************BootstrapDialogContent***************\\
//***************BootstrapDialogContent***************\\
//***************BootstrapDialogContent***************\\
//***************BootstrapDialogContent***************\\
//***************BootstrapDialogContent***************\\
//***************BootstrapDialogContent***************\\
//***************BootstrapDialogContent***************\\
//***************BootstrapDialogContent***************\\

export const BootstrapDialogContent = (props) => {
  const { children, ...other } = props;

  return (
    <DialogContentComp dividers {...other}>
      {children}
    </DialogContentComp>
  );
};

//***************BootstrapDialogActions***************\\
//***************BootstrapDialogActions***************\\
//***************BootstrapDialogActions***************\\
//***************BootstrapDialogActions***************\\
//***************BootstrapDialogActions***************\\
//***************BootstrapDialogActions***************\\
//***************BootstrapDialogActions***************\\
//***************BootstrapDialogActions***************\\
//***************BootstrapDialogActions***************\\
//***************BootstrapDialogActions***************\\

export const BootstrapDialogActions = (props) => {
  const { children, ...other } = props;

  return <DialogActionsComp {...other}>{children}</DialogActionsComp>;
};
