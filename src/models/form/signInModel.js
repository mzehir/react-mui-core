export const SIGN_IN_FORM_MODEL = {
  email: {
    name: "email",
    componentType: "TextFieldComp",
    componentProps: {
      fullWidth: true,
      label: "belongingToTheProject.emailAddress",
      id: "sign-in-textfield-email",
    },
  },

  password: {
    name: "password",
    componentType: "TextFieldPassword",
    componentProps: {
      fullWidth: true,
      label: "belongingToTheProject.password",
      id: "sign-in-textfield-password",
    },
  },

  rememberMe: {
    name: "rememberMe",
    componentType: "FormControlLabelCheckboxComp",
    componentProps: {
      label: "belongingToTheProject.rememberMe",
    },
  },
};

export const SIGN_IN_FORM_INITIAL_VALUES = {
  email: "",
  password: "",
  rememberMe: false,
};
