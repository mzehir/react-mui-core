import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AccordionDetailsComp = (props) => {
  const { children, ...other } = props;
  return <AccordionDetails {...other}>{children}</AccordionDetails>;
};

export default AccordionDetailsComp;
