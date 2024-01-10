import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AutocompleteSelectComp from "../AutocompleteSelectComp";
import BoxComp from "../../Box";
import TypographyComp from "../../Typography";
import { CancelButton, SaveButton } from "../CustomButtons";
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from "../BootstrapDialog";
import FormComponents from "../../reactHookFormComp/FormComponents";
import { activeCountryPhoneFormatCompProps } from "../../../utils/constants/appConstants/phoneNumberConstant";

import { styled, lighten, darken } from "@mui/system";
import { createFilterOptions } from "@mui/material";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

const filter = createFilterOptions();

const ForUserSelect = ({
  options,
  selectedValue,
  //* Wrapper setting props
  disableCloseOnSelect,
  clearOnEscape,
  disableClearable,
  disableListWrap,
  disabled,
  clearOnBlur,
  autoComplete,
  autoHighlight,
  selectOnFocus,
  getOptionDisabled,
  groupBy,
  addNewItem,
  customRenderOption,
  //* Wrapper setting props
  setSelectedValue,
  setOptions,
}) => {
  const optionsGroupBy = React.useMemo(() => {
    return options.map((option) => {
      const firstLetter = option.person[0].toUpperCase();

      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        ...option,
      };
    });
  }, [options]);

  const optionsGroupByMethod = (optionsGroupBy) => {
    return optionsGroupBy.sort(
      (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
    );
  };

  const getOptionLabelMethod = (option) => {
    if (addNewItem) {
      // Listeye yeni eleman ekleme
      if (typeof option === "string") {
        return option;
      }
      if (option.inputValue) {
        return option.inputValue;
      }
    }
    return `${option.person} - ${option.phone}`;
  };

  const renderOptionMethod = (props, option) => {
    if (addNewItem && option && option.inputValue) {
      // Listeye yeni eleman ekleme
      return (
        <li {...props}>
          {option.person} {option.phone && "-"} {option.phone && option.phone}
        </li>
      );
    } else if (customRenderOption) {
      return (
        <BoxComp
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
          }}
          {...props}
        >
          <TypographyComp style={{ color: "#2A6549" }}>
            <strong>{option.person}</strong>
          </TypographyComp>

          {option.phone && <span>-</span>}

          {option.phone && <TypographyComp>{option.phone}</TypographyComp>}
        </BoxComp>
      );
    } else {
      return (
        <li {...props}>
          {option.person} {option.phone && "-"} {option.phone && option.phone}
        </li>
      );
    }
  };

  const filterOptionsMethod = (options, params) => {
    const filtered = filter(options, params);

    if (addNewItem) {
      // Listeye yeni eleman ekleme
      if (params.inputValue !== "") {
        filtered.push({
          inputValue: params.inputValue,
          person: `+ Ekle "${params.inputValue}"`,
        });
      }
    }

    return filtered;
  };

  const onChangeMethod = (event, newValue) => {
    if (addNewItem) {
      // Listeye yeni eleman ekleme
      if (typeof newValue === "string") {
        setTimeout(() => {
          setNewItemDialogOpen(true);
        });
      } else if (newValue && newValue.inputValue) {
        setNewItemDialogOpen(true);
      } else {
        setSelectedValue(newValue);
      }
    } else {
      setSelectedValue(newValue);
    }
  };

  const [newItemDialogOpen, setNewItemDialogOpen] = useState(false);

  return (
    <>
      <AutocompleteSelectComp
        textFieldProps={{ label: "componentsText.selectPerson" }}
        autocompleteProps={{
          options: groupBy ? optionsGroupByMethod(optionsGroupBy) : options,
          value: selectedValue,
          //* Wrapper setting props
          disableCloseOnSelect: disableCloseOnSelect,
          clearOnEscape: clearOnEscape,
          disableClearable: disableClearable,
          disableListWrap: disableListWrap,
          disabled: disabled,
          clearOnBlur: clearOnBlur,
          autoComplete: autoComplete,
          autoHighlight: autoHighlight,
          selectOnFocus: selectOnFocus,
          ...(getOptionDisabled
            ? {
                getOptionDisabled: (option) =>
                  option.person == selectedValue?.person,
              }
            : {}),
          freeSolo: addNewItem, // Listeye yeni eleman ekleme
          ...(groupBy ? { groupBy: (option) => option.firstLetter } : {}),
          ...(groupBy
            ? {
                renderGroup: (params) => (
                  <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                  </li>
                ),
              }
            : {}),
          //* Methods
          getOptionLabel: getOptionLabelMethod,
          renderOption: (props, option) => renderOptionMethod(props, option),
          filterOptions: filterOptionsMethod,
          onChange: onChangeMethod,
        }}
      />

      {addNewItem && newItemDialogOpen && (
        <AddNewUserDialog
          open={newItemDialogOpen}
          setOpen={setNewItemDialogOpen}
          saveOnClick={(newValues) => {
            let _options = [...options];
            let newPersonFields = {
              person: newValues.person,
              phone: newValues.phone,
            };

            //* Bu noktada yeni kullanıcı bilgileri backendde kaydedilmeli.
            //* Backend kullanıcı id'sini geri vermeli.
            //* Backendden gelen id newPersonFields objesine 'id' olarak eklenmeli
            _options.push(newPersonFields);

            setOptions(_options);
            setSelectedValue(newPersonFields);
            setNewItemDialogOpen(false);
          }}
          cancelOnClick={() => setNewItemDialogOpen(false)}
        />
      )}
    </>
  );
};

export default ForUserSelect;

const AddNewUserDialog = ({ open, setOpen, saveOnClick, cancelOnClick }) => {
  const formMethods = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      yup.object().shape({
        person: yup.string().required(),
        phone: yup.string().required(),
      })
    ),
    defaultValues: {
      person: "",
      phone: "",
    },
  });

  const onSubmit = async (values) => {
    saveOnClick(values);
  };

  return (
    <BootstrapDialog maxWidth="xs" open={open} onClose={() => setOpen(false)}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <BootstrapDialogTitle onClose={() => setOpen(false)}>
          Yeni bir kişi ekle
        </BootstrapDialogTitle>

        <BootstrapDialogContent>
          <FormComponents
            control={formMethods.control}
            name="person"
            componentType="TextFieldComp"
            componentProps={{
              fullWidth: true,
              label: "belongingToTheProject.name",
            }}
            formProps={{
              error: formMethods?.formState?.errors.person,
            }}
          />

          <FormComponents
            control={formMethods.control}
            name="phone"
            componentType="TextFieldPhoneNumber"
            componentProps={{
              fullWidth: true,
              label: "belongingToTheProject.phoneNumber",
              ...activeCountryPhoneFormatCompProps,
            }}
            formProps={{
              error: formMethods?.formState?.errors.phone,
            }}
          />
        </BootstrapDialogContent>

        <BootstrapDialogActions>
          <SaveButton type="submit" />
          <CancelButton onClick={cancelOnClick} />
        </BootstrapDialogActions>
      </form>
    </BootstrapDialog>
  );
};
