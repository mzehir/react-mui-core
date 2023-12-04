import { activeCountryPhoneFormatCompProps } from "../../utils/constants/appConstants/phoneNumberConstant";

export const SIGN_UP_FORM_MODEL = {
  name: {
    name: "name",
    componentType: "TextFieldComp",
    componentProps: {
      fullWidth: true,
      label: "belongingToTheProject.name",
      id: "sign-up-textfield-name",
    },
  },

  surname: {
    name: "surname",
    componentType: "TextFieldComp",
    componentProps: {
      fullWidth: true,
      label: "belongingToTheProject.surname",
      id: "sign-up-textfield-surname",
    },
  },

  email: {
    name: "email",
    componentType: "TextFieldComp",
    componentProps: {
      fullWidth: true,
      label: "belongingToTheProject.emailAddress",
      id: "sign-up-textfield-email",
    },
  },

  phoneNumber: {
    name: "phoneNumber",
    componentType: "TextFieldPhoneNumber",
    componentProps: {
      fullWidth: true,
      label: "belongingToTheProject.phoneNumber",
      id: "sign-up-textfield-phone-number",
      ...activeCountryPhoneFormatCompProps,
    },
  },

  password: {
    name: "password",
    componentType: "TextFieldPassword",
    componentProps: {
      fullWidth: true,
      label: "belongingToTheProject.password",
      id: "sign-up-textfield-password",
    },
  },

  confirmPassword: {
    name: "confirmPassword",
    componentType: "TextFieldPassword",
    componentProps: {
      fullWidth: true,
      label: "belongingToTheProject.confirmPassword",
      id: "sign-up-textfield-confirm-password",
    },
  },
};

export const SIGN_UP_FORM_INITIAL_VALUES = {
  name: "",
  surname: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};
