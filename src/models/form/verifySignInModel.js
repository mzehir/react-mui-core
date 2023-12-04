export const VERIFY_SIGN_IN_FORM_MODEL = {
  verificationCode: {
    name: "verificationCode",
    componentType: "TextFieldComp",
    componentProps: {
      fullWidth: true,
      label: "belongingToTheProject.verificationCode",
    },
  },
};

export const VERIFY_SIGN_IN_FORM_INITIAL_VALUES = {
  token: "",
  verificationCode: "",
};
