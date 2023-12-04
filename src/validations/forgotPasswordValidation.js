import * as yup from "yup";
import { isEmail } from "./regexValidations";

export const FORGOT_PASSWORD_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .required("validationTexts.requiredEmail")
    .matches(isEmail, "validationTexts.notValidEmail"),
});
