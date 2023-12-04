import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

//*****************************************************************************************

const maxWidthEnum = ["xs", "sm", "md", "lg", "xl"];
const scrollEnum = ["paper", "body"];

export const DialogComp = (props) => {
  const { children, ...other } = props;

  return <Dialog {...other}>{children}</Dialog>;
};

DialogComp.propTypes = {
  maxWidth: PropTypes.oneOf(maxWidthEnum),
  scroll: PropTypes.oneOf(scrollEnum),
};

DialogComp.defaultProps = {
  fullWidth: false,
  fullScreen: false,
  scroll: "paper",
  maxWidth: "sm",
};

//*****************************************************************************************

export const DialogTitleComp = (props) => {
  const { children, ...other } = props;

  return <DialogTitle {...other}>{children}</DialogTitle>;
};

//*****************************************************************************************

export const DialogContentComp = (props) => {
  const { children, ...other } = props;

  return <DialogContent {...other}>{children}</DialogContent>;
};

//*****************************************************************************************

export const DialogContentTextComp = (props) => {
  const { children, ...other } = props;

  return <DialogContentText {...other}>{children}</DialogContentText>;
};

//*****************************************************************************************

export const DialogActionsComp = (props) => {
  const { children, ...other } = props;

  return <DialogActions {...other}>{children}</DialogActions>;
};
