import React from "react";
import Autocomplete from "@mui/material/Autocomplete";

const AutocompleteComp = (props) => {
  const { ...other } = props;
  return <Autocomplete {...other} />;
};

export default AutocompleteComp;
