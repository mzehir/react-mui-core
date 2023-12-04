import * as yup from "yup";
import {
  isEmail,
  isOnlyNumbers,
  isPassword,
  nameMaxLength,
  nameMinLength,
  passwordMaxLength,
  passwordMinLength,
  surnameMaxLength,
  surnameMinLength,
} from "./regexValidations";
import { activeCountryPhoneFormatRulesProps } from "../utils/constants/appConstants/phoneNumberConstant";

export const SIGN_UP_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required("validationTexts.requiredName")
    .min(nameMinLength, "validationTexts.minName")
    .max(nameMaxLength, "validationTexts.maxName"),
  surname: yup
    .string()
    .required("validationTexts.requiredSurname")
    .min(surnameMinLength, "validationTexts.minSurname")
    .max(surnameMaxLength, "validationTexts.maxSurname"),

  email: yup
    .string()
    .required("validationTexts.requiredEmail")
    .matches(isEmail, "validationTexts.notValidEmail"),

  phoneNumber: yup
    .string()
    .test(
      "nonZeroFirstDigit",
      "validationTexts.nonZeroFirstDigitPhone",
      (value) => {
        if (activeCountryPhoneFormatRulesProps.nonZeroFirstDigit && value) {
          return value[0] !== "0";
        } else {
          return true;
        }
      }
    )
    .test("onlyNumbers", "validationTexts.onlyNumbersPhone", (value) => {
      return isOnlyNumbers.test(value);
    })
    .test(
      "tenDigits",
      "validationTexts.numberOfDigitsInTheNumberPhone",
      (value) => {
        if (activeCountryPhoneFormatRulesProps.numberLength && value) {
          return (
            value.length === activeCountryPhoneFormatRulesProps.numberLength
          );
        } else {
          return true;
        }
      }
    ),

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
