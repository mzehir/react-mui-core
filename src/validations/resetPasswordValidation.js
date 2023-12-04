import * as yup from "yup";
import {
  isPassword,
  passwordMaxLength,
  passwordMinLength,
} from "./regexValidations";

export const RESET_PASSWORD_SCHEMA = yup.object().shape({
  token: yup.string().required(),

  password: yup
    .string()
    .required("validationTexts.requiredPassword")
    .min(passwordMinLength, "validationTexts.minPassword")
    .max(passwordMaxLength, "validationTexts.maxPassword")
    .matches(isPassword, "validationTexts.notValidPassword"),

  confirmPassword: yup
    .string()
    .required("validationTexts.requiredConfirmPassword")
    .oneOf([yup.ref("password"), null], "validationTexts.passwordsDoNotMatch"),
});
