import React from "react";
import AutocompleteComp from "../Autocomplete";
import TextFieldComp from "../TextField";

const AutocompleteSelectComp = (props) => {
  const { autocompleteProps, textFieldProps } = props;

  return (
    <AutocompleteComp
      {...autocompleteProps}
      renderInput={(params) => (
        <TextFieldComp {...params} {...textFieldProps} />
      )}
    />
  );
};

export default AutocompleteSelectComp;
