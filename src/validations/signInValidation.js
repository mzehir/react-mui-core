import * as yup from "yup";
import {
  isEmail,
  isPassword,
  passwordMaxLength,
  passwordMinLength,
} from "./regexValidations";

export const SIGN_IN_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .required("validationTexts.requiredEmail")
    .matches(isEmail, "validationTexts.notValidEmail"),

  password: yup
    .string()
    .required("validationTexts.requiredPassword")
    .min(passwordMinLength, "validationTexts.minPassword")
    .max(passwordMaxLength, "validationTexts.maxPassword")
    .matches(isPassword, "validationTexts.notValidPassword"),
});
