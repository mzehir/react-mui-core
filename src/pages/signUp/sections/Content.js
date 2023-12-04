import React from "react";
import { useNavigate } from "react-router-dom";
import AuthUseContext from "../../../hooks/AuthUseContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SIGN_UP_SCHEMA } from "../../../validations/signUpValidation";
import {
  SIGN_UP_FORM_INITIAL_VALUES,
  SIGN_UP_FORM_MODEL,
} from "../../../models/form/signUpModel";

import FormComponents from "../../../components/reactHookFormComp/FormComponents";
import { SignUpButton } from "../../../components/customizedComp/CustomButtons";
import { ROUTER } from "../../../utils/constants/routerConstant";

function Content() {
  let navigate = useNavigate();
  const { signUp } = AuthUseContext();

  const formMethods = useForm({
    mode: "onBlur",
    resolver: yupResolver(SIGN_UP_SCHEMA),
    defaultValues: SIGN_UP_FORM_INITIAL_VALUES,
  });

  const onSubmit = async (values) => {
    signUp(values, () => navigate(ROUTER.SIGN_IN.path));
  };

  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      <FormComponents
        control={formMethods.control}
        {...SIGN_UP_FORM_MODEL.name}
        formProps={{
          error: formMethods?.formState?.errors.name,
        }}
      />

      <FormComponents
        control={formMethods.control}
        {...SIGN_UP_FORM_MODEL.surname}
        formProps={{
          error: formMethods?.formState?.errors.surname,
        }}
      />

      <FormComponents
        control={formMethods.control}
        {...SIGN_UP_FORM_MODEL.email}
        formProps={{
          error: formMethods?.formState?.errors.email,
        }}
      />

      <FormComponents
        control={formMethods.control}
        {...SIGN_UP_FORM_MODEL.phoneNumber}
        formProps={{
          error: formMethods?.formState?.errors.phoneNumber,
        }}
      />

      <FormComponents
        control={formMethods.control}
        {...SIGN_UP_FORM_MODEL.password}
        formProps={{
          error: formMethods?.formState?.errors.password,
        }}
      />

      <FormComponents
        control={formMethods.control}
        {...SIGN_UP_FORM_MODEL.confirmPassword}
        formProps={{
          error: formMethods?.formState?.errors.confirmPassword,
        }}
      />

      <SignUpButton
        id="btn-sign-up-submit"
        type="submit"
        fullWidth
        disabled={false}
      />
    </form>
  );
}

export default Content;
