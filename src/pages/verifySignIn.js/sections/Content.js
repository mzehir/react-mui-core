import React from "react";
import { useLocation } from "react-router-dom";
import AuthUseContext from "../../../hooks/AuthUseContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { VERIFY_SIGN_IN_SCHEMA } from "../../../validations/verifySignInValidation";
import {
  VERIFY_SIGN_IN_FORM_INITIAL_VALUES,
  VERIFY_SIGN_IN_FORM_MODEL,
} from "../../../models/form/verifySignInModel";

import FormComponents from "../../../components/reactHookFormComp/FormComponents";
import { VerifyButton } from "../../../components/customizedComp/CustomButtons";
import { STATE_KEY } from "../../../utils/constants/locationStateKey";

function Content() {
  const location = useLocation();
  const { verifySignIn } = AuthUseContext();

  const formMethods = useForm({
    mode: "onBlur",
    resolver: yupResolver(VERIFY_SIGN_IN_SCHEMA),
    defaultValues: {
      ...VERIFY_SIGN_IN_FORM_INITIAL_VALUES,
      token: location.state
        ? location.state[STATE_KEY.VERIFICATION_TOKEN.key]
        : "",
    },
  });

  const onSubmit = async (values) => {
    verifySignIn(values);
  };

  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      <FormComponents
        control={formMethods.control}
        {...VERIFY_SIGN_IN_FORM_MODEL.verificationCode}
        formProps={{
          error: formMethods?.formState?.errors.verificationCode,
        }}
      />

      <VerifyButton type="submit" fullWidth disabled={false} />
    </form>
  );
}

export default Content;
