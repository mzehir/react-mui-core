import * as yup from "yup";

export const VERIFY_SIGN_IN_SCHEMA = yup.object().shape({
  verificationCode: yup
    .string()
    .required("validationTexts.requiredVerificationCode"),
});
