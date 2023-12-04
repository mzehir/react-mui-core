import React from "react";
import { useNavigate } from "react-router-dom";
import ApiUseContext from "../../../hooks/ApiUseContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FORGOT_PASSWORD_SCHEMA } from "../../../validations/forgotPasswordValidation";
import {
  FORGOT_PASSWORD_FORM_INITIAL_VALUES,
  FORGOT_PASSWORD_FORM_MODEL,
} from "../../../models/form/forgotPasswordModel";

import FormComponents from "../../../components/reactHookFormComp/FormComponents";
import { SendButton } from "../../../components/customizedComp/CustomButtons";

import { ROUTER } from "../../../utils/constants/routerConstant";

function Content() {
  const navigate = useNavigate();
  const { APIPath, postData } = ApiUseContext();

  const formMethods = useForm({
    mode: "onBlur",
    resolver: yupResolver(FORGOT_PASSWORD_SCHEMA),
    defaultValues: FORGOT_PASSWORD_FORM_INITIAL_VALUES,
  });

  const onSubmit = async (values) => {
    const response = await postData(APIPath.FORGET_PASSWORD.path, {
      ...values,
    });

    if (response.isSuccess) {
      navigate(ROUTER.SIGN_IN.path);
    }
  };

  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      <FormComponents
        control={formMethods.control}
        {...FORGOT_PASSWORD_FORM_MODEL.email}
        formProps={{
          error: formMethods?.formState?.errors.email,
        }}
      />

      <SendButton type="submit" fullWidth disabled={false} />
    </form>
  );
}

export default Content;
