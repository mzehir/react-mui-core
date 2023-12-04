import React from "react";
import { Controller } from "react-hook-form";

import TextFieldComp from "../TextField";
import TextFieldIcon from "../customizedComp/TextFieldIcon";
import TextFieldPassword from "../customizedComp/TextFieldPassword";
import PatternFormatComp from "../reactNumberFormat/PatternFormat";
import NumericFormatComp from "../reactNumberFormat/NumericFormat";
import TextFieldGoogleLocationSelectDialog from "../customizedComp/TextFieldGoogleLocationSelectDialog";
import FormControlLabelCheckboxComp from "../customizedComp/FormControlLabelCheckboxComp";
import BirthDatePickerComp from "../customizedComp/BirthDatePicker";
import FormControlSelectComp from "../customizedComp/FormControlSelectComp";
import MultiSelect from "../customizedComp/MultiSelect";

const FormComponents = ({
  name,
  componentType,
  componentProps,
  formProps,
  control,
}) => {
  //* Tipe göre component seçimi
  const componentRender = ({
    componentType,
    componentProps,
    formProps,
    field,
  }) => {
    if (componentType === "TextFieldComp") {
      return (
        <FormTextFieldComp
          componentProps={componentProps}
          formProps={formProps}
          field={field}
        />
      );
    } else if (componentType === "TextFieldIcon") {
      return (
        <FormTextFieldIconComp
          componentProps={componentProps}
          formProps={formProps}
          field={field}
        />
      );
    } else if (componentType === "TextFieldPassword") {
      return (
        <FormTextFieldPassword
          componentProps={componentProps}
          formProps={formProps}
          field={field}
        />
      );
    } else if (componentType === "TextFieldPhoneNumber") {
      return (
        <FormPatternFormatComp
          componentProps={componentProps}
          formProps={formProps}
          field={field}
        />
      );
    } else if (componentType === "TextFieldPrice") {
      return (
        <FormNumericFormatComp
          componentProps={componentProps}
          formProps={formProps}
          field={field}
        />
      );
    } else if (componentType === "FormControlLabelCheckboxComp") {
      return (
        <FormControlLabelCheckbox
          componentProps={componentProps}
          field={field}
        />
      );
    } else if (componentType === "BirthDatePickerComp") {
      return (
        <FormControlBirthDatePickerComp
          componentProps={componentProps}
          formProps={formProps}
          field={field}
        />
      );
    } else if (componentType === "FormControlSelectComp") {
      return (
        <FormControlSelect
          componentProps={componentProps}
          formProps={formProps}
          field={field}
        />
      );
    } else if (componentType === "FormControlMultiSelectComp") {
      return (
        <FormControlMultiSelect
          componentProps={componentProps}
          formProps={formProps}
          field={field}
        />
      );
    } else if (componentType === "TextFieldGoogleLocationSelectDialog") {
      return (
        <FormTextFieldGoogleLocationSelectDialog
          componentProps={componentProps}
          formProps={formProps}
          field={field}
        />
      );
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        componentRender({
          componentType: componentType,
          componentProps: componentProps,
          formProps: formProps,
          field: field,
        })
      }
    />
  );
};

export default FormComponents;

function FormTextFieldComp({ componentProps, formProps, field }) {
  return (
    <TextFieldComp
      {...(formProps.error ? { error: true } : {})}
      {...(formProps?.error?.message
        ? { helperText: formProps.error.message }
        : {})}
      {...componentProps}
      {...field}
    />
  );
}

function FormTextFieldIconComp({ componentProps, formProps, field }) {
  return (
    <TextFieldIcon
      {...(formProps.error ? { error: true } : {})}
      {...(formProps?.error?.message
        ? { helperText: formProps.error.message }
        : {})}
      {...componentProps}
      {...field}
    />
  );
}

function FormTextFieldPassword({ componentProps, formProps, field }) {
  return (
    <TextFieldPassword
      {...(formProps.error ? { error: true } : {})}
      {...(formProps?.error?.message
        ? { helperText: formProps.error.message }
        : {})}
      {...componentProps}
      {...field}
    />
  );
}

function FormPatternFormatComp({ componentProps, formProps, field }) {
  const { name, onBlur, onChange, value } = field; // ref
  return (
    <PatternFormatComp
      {...(formProps.error ? { error: true } : {})}
      {...(formProps?.error?.message
        ? { helperText: formProps.error.message }
        : {})}
      {...componentProps}
      //* Field props
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  );
}

function FormNumericFormatComp({ componentProps, formProps, field }) {
  const { name, onBlur, onChange, value } = field; // ref
  return (
    <NumericFormatComp
      {...(formProps.error ? { error: true } : {})}
      {...(formProps?.error?.message
        ? { helperText: formProps.error.message }
        : {})}
      {...componentProps}
      //* Field props
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  );
}

function FormControlLabelCheckbox({ componentProps, field }) {
  const { value } = field;

  return (
    <FormControlLabelCheckboxComp
      checked={value}
      {...componentProps}
      {...field}
    />
  );
}

function FormControlBirthDatePickerComp({ componentProps, formProps, field }) {
  return (
    <BirthDatePickerComp
      error={formProps?.error ? true : false}
      {...(formProps?.error?.message
        ? { helperText: formProps?.error.message }
        : {})}
      {...componentProps}
      {...field}
    />
  );
}

function FormControlSelect({ componentProps, formProps, field }) {
  return (
    <FormControlSelectComp
      isLabelTranslation={true}
      //
      {...(formProps.error ? { error: true } : {})}
      {...(formProps?.error?.message
        ? { helperText: formProps.error.message }
        : {})}
      {...componentProps}
      {...field}
    />
  );
}

function FormControlMultiSelect({ componentProps, formProps, field }) {
  const { name, onBlur, onChange, value } = field; // ref
  return (
    <MultiSelect
      isLabelTranslation={true}
      //
      {...(formProps.error ? { error: true } : {})}
      {...(formProps?.error?.message
        ? { helperText: formProps.error.message }
        : {})}
      {...componentProps}
      //* Field props
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  );
}

function FormTextFieldGoogleLocationSelectDialog({
  componentProps,
  formProps,
  field,
}) {
  return (
    <TextFieldGoogleLocationSelectDialog
      {...(formProps.error ? { error: true } : {})}
      {...(formProps?.error?.message
        ? { helperText: formProps.error.message }
        : {})}
      {...componentProps}
      {...field}
    />
  );
}
