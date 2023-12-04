import React from "react";
import PropTypes from "prop-types";

import ButtonComp from "../Button";
import {
  DialogComp,
  DialogTitleComp,
  DialogContentComp,
  DialogContentTextComp,
  DialogActionsComp,
} from "../Dialog";

const ConfirmationDialog = ({
  open,
  titleText,
  contentText,
  yesButtonText,
  noButtonText,
  yesButtonClick,
  noButtonClick,
}) => {
  const handleClickOpen = () => {
    yesButtonClick();
  };

  const handleClose = () => {
    noButtonClick();
  };

  return (
    <DialogComp open={open} onClose={handleClose} fullWidth>
      <DialogTitleComp>{titleText}</DialogTitleComp>

      <DialogContentComp>
        <DialogContentTextComp>{contentText}</DialogContentTextComp>
      </DialogContentComp>

      <DialogActionsComp>
        <ButtonComp color="success" onClick={() => handleClickOpen()}>
          {yesButtonText}
        </ButtonComp>
        <ButtonComp color="error" onClick={() => handleClose()} autoFocus>
          {noButtonText}
        </ButtonComp>
      </DialogActionsComp>
    </DialogComp>
  );
};

export default ConfirmationDialog;

ConfirmationDialog.propTypes = {
  titleText: PropTypes.string.isRequired,
  contentText: PropTypes.string.isRequired,
  yesButtonText: PropTypes.string.isRequired,
  noButtonText: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  yesButtonClick: PropTypes.func.isRequired,
  noButtonClick: PropTypes.func.isRequired,
};
