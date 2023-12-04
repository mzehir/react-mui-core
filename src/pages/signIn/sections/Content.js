import React from "react";
import AuthUseContext from "../../../hooks/AuthUseContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SIGN_IN_SCHEMA } from "../../../validations/signInValidation";
import {
  SIGN_IN_FORM_INITIAL_VALUES,
  SIGN_IN_FORM_MODEL,
} from "../../../models/form/signInModel";

import FormComponents from "../../../components/reactHookFormComp/FormComponents";
import { SignInButton } from "../../../components/customizedComp/CustomButtons";

import { getBypassVerifyToken } from "../../../utils/helper/sessionStorage";

function Content() {
  const { signIn } = AuthUseContext();

  const formMethods = useForm({
    mode: "onBlur",
    resolver: yupResolver(SIGN_IN_SCHEMA),
    defaultValues: {
      ...SIGN_IN_FORM_INITIAL_VALUES,
      bypassVerifyToken: getBypassVerifyToken(),
    },
  });

  const onSubmit = (values) => {
    signIn(values);
  };

  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      <FormComponents
        control={formMethods.control}
        {...SIGN_IN_FORM_MODEL.email}
        formProps={{
          error: formMethods?.formState?.errors.email,
        }}
      />

      <FormComponents
        control={formMethods.control}
        {...SIGN_IN_FORM_MODEL.password}
        formProps={{
          error: formMethods?.formState?.errors.password,
        }}
      />

      <FormComponents
        control={formMethods.control}
        {...SIGN_IN_FORM_MODEL.rememberMe}
      />

      <SignInButton
        id="btn-sign-in-submit"
        type="submit"
        fullWidth
        disabled={false}
      />
    </form>
  );
}

export default Content;
