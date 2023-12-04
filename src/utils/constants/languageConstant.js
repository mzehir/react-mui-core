import {
  nameMaxLength,
  nameMinLength,
  passwordMaxLength,
  passwordMinLength,
  surnameMaxLength,
  surnameMinLength,
} from "../../validations/regexValidations";
import { activeCountryPhoneFormatRulesProps } from "./appConstants/phoneNumberConstant";

export const LANGUAGES = {
  EN: { key: "EN", text: "componentsText.english" },
  TR: { key: "TR", text: "componentsText.turkish" },
};

export const VALIDATION_TEXT_WAITING_FOR_PROPS_READY_TYPE = {
  "validationTexts.minPassword": [{ key: "number", value: passwordMinLength }],
  "validationTexts.maxPassword": [{ key: "number", value: passwordMaxLength }],

  "validationTexts.minName": [{ key: "number", value: nameMinLength }],
  "validationTexts.maxName": [{ key: "number", value: nameMaxLength }],

  "validationTexts.minSurname": [{ key: "number", value: surnameMinLength }],
  "validationTexts.maxSurname": [{ key: "number", value: surnameMaxLength }],

  "validationTexts.numberOfDigitsInTheNumberPhone": [
    { key: "number", value: activeCountryPhoneFormatRulesProps.numberLength },
  ],
};

export const INTERPOLATION_WORD_KEYS = {};
