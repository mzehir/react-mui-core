export const RESET_PASSWORD_FORM_MODEL = {
  password: {
    name: "password",
    componentType: "TextFieldPassword",
    componentProps: {
      fullWidth: true,
      label: "belongingToTheProject.password",
    },
  },

  confirmPassword: {
    name: "confirmPassword",
    componentType: "TextFieldPassword",
    componentProps: {
      fullWidth: true,
      label: "belongingToTheProject.confirmPassword",
    },
  },
};

export const RESET_PASSWORD_FORM_INITIAL_VALUES = {
  token: "",
  password: "",
  confirmPassword: "",
};
