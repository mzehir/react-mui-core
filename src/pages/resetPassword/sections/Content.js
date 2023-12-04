import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ApiUseContext from "../../../hooks/ApiUseContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RESET_PASSWORD_SCHEMA } from "../../../validations/resetPasswordValidation";
import {
  RESET_PASSWORD_FORM_INITIAL_VALUES,
  RESET_PASSWORD_FORM_MODEL,
} from "../../../models/form/resetPasswordModel";

import FormComponents from "../../../components/reactHookFormComp/FormComponents";
import { UpdateButton } from "../../../components/customizedComp/CustomButtons";
import { SEARCH_PARAMS_KEY } from "../../../utils/constants/locationStateKey";
import { ROUTER } from "../../../utils/constants/routerConstant";

function Content() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { APIPath, postData } = ApiUseContext();

  const formMethods = useForm({
    mode: "onBlur",
    resolver: yupResolver(RESET_PASSWORD_SCHEMA),
    defaultValues: {
      ...RESET_PASSWORD_FORM_INITIAL_VALUES,
      token: searchParams.get([SEARCH_PARAMS_KEY.CREATE_PASSWORD_TOKEN.getKey]),
    },
  });

  const onSubmit = async (values) => {
    const response = await postData(APIPath.RESET_PASSWORD, values);

    if (response.isSuccess) {
      navigate(ROUTER.SIGN_IN.path);
    }
  };

  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      <FormComponents
        control={formMethods.control}
        {...RESET_PASSWORD_FORM_MODEL.password}
        formProps={{
          error: formMethods?.formState?.errors.password,
        }}
      />

      <FormComponents
        control={formMethods.control}
        {...RESET_PASSWORD_FORM_MODEL.confirmPassword}
        formProps={{
          error: formMethods?.formState?.errors.confirmPassword,
        }}
      />

      <UpdateButton type="submit" fullWidth disabled={false} />
    </form>
  );
}

export default Content;
