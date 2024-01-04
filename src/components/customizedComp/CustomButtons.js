import React from "react";

import ButtonComp from "../Button";
import VisuallyHiddenInputComp from "./VisuallyHiddenInput";

import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";
import UpdateIcon from "@mui/icons-material/Update";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClearIcon from "@mui/icons-material/Clear";

export const SendButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp variant="contained" endIcon={<SendIcon />} {...other}>
      componentsText.send
    </ButtonComp>
  );
};

export const UpdateButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp
      variant="contained"
      color="success"
      endIcon={<UpdateIcon />}
      {...other}
    >
      componentsText.update
    </ButtonComp>
  );
};

export const SaveButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp
      variant="contained"
      color="success"
      endIcon={<SaveIcon />}
      {...other}
    >
      componentsText.save
    </ButtonComp>
  );
};

export const DeleteButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp
      variant="contained"
      color="error"
      endIcon={<DeleteIcon />}
      {...other}
    >
      componentsText.delete
    </ButtonComp>
  );
};

export const CancelButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp color="secondary" endIcon={<CancelIcon />} {...other}>
      componentsText.cancel
    </ButtonComp>
  );
};

export const SignInButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp
      variant="contained"
      color="primary"
      endIcon={<LoginIcon />}
      {...other}
    >
      componentsText.signIn
    </ButtonComp>
  );
};

export const SignUpButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp
      variant="contained"
      color="primary"
      endIcon={<HowToRegIcon />}
      {...other}
    >
      componentsText.signUp
    </ButtonComp>
  );
};

export const VerifyButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp
      variant="contained"
      color="success"
      endIcon={<VerifiedUserIcon />}
      {...other}
    >
      componentsText.verify
    </ButtonComp>
  );
};

export const UploadPhotoButton = (props) => {
  const { onChange, children, ...other } = props;

  return (
    <ButtonComp
      component="label"
      variant="contained"
      endIcon={<ImageIcon />}
      {...other}
    >
      componentsText.uploadPhoto
      <VisuallyHiddenInputComp accept="image/*" onChange={onChange} />
    </ButtonComp>
  );
};

export const FilterButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp
      variant="contained"
      color="success"
      endIcon={<FilterListIcon />}
      {...other}
    >
      componentsText.filter
    </ButtonComp>
  );
};

export const CleanTheFiltersButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp
      variant="contained"
      color="error"
      endIcon={<ClearIcon />}
      {...other}
    >
      componentsText.clearTheFilters
    </ButtonComp>
  );
};
