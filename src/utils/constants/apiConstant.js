import {
  signUpRequestAfterDataSettings,
  signUpRequestBeforeDataSettings,
} from "../../models/api/signUpModel";

import {
  signInRequestAfterDataSettings,
  signInRequestBeforeDataSettings,
} from "../../models/api/signInModel";

import {
  verifySignInRequestAfterDataSettings,
  verifySignInRequestBeforeDataSettings,
} from "../../models/api/verifySignInModel";

import { getAuthendicatedUserInfoRequestAfterDataSettings } from "../../models/api/getAuthendicatedUserInfoModel";

export const HTTP_TYPE = {
  POST: { key: "post" },
  GET: { key: "get" },
  DELETE: { key: "delete" },
  PUT: { key: "put" },
};

export const API_PATH = {
  SIGN_UP: {
    path: "users/signUp",
    requestBeforeDataSettings: signUpRequestBeforeDataSettings,
    requestAfterDataSettings: signUpRequestAfterDataSettings,
    toast: {
      success: { active: false, message: "successfulApiRequestMessages" },
    },
  },

  SIGN_IN: {
    path: "users/signIn",
    requestBeforeDataSettings: signInRequestBeforeDataSettings,
    requestAfterDataSettings: signInRequestAfterDataSettings,

    toast: {
      success: { active: false, message: "successfulApiRequestMessages" },
    },
  },

  VERIFY_SIGN_IN: {
    path: "users/verifySignIn",
    requestBeforeDataSettings: verifySignInRequestBeforeDataSettings,
    requestAfterDataSettings: verifySignInRequestAfterDataSettings,

    toast: {
      success: { active: false, message: "successfulApiRequestMessages" },
    },
  },

  SIGN_OUT: {
    path: "users/signOut",
    requestBeforeDataSettings: undefined,
    requestAfterDataSettings: undefined,

    toast: {
      success: { active: false, message: "successfulApiRequestMessages" },
    },
  },

  FORGET_PASSWORD: {
    path: "users/forgetPassword",
    requestBeforeDataSettings: undefined,
    requestAfterDataSettings: undefined,

    toast: {
      success: { active: true, message: "successfulApiRequestMessages" },
    },
  },

  RESET_PASSWORD: {
    path: "users/verifyForgetPassword",
    requestBeforeDataSettings: undefined,
    requestAfterDataSettings: undefined,

    toast: {
      success: { active: false, message: "successfulApiRequestMessages" },
    },
  },

  GET_AUTHENDICATION_USER_INFO: {
    path: "users/getAuthendicatedUserInfo",
    requestBeforeDataSettings: undefined,
    requestAfterDataSettings: getAuthendicatedUserInfoRequestAfterDataSettings,

    toast: {
      success: { active: false, message: "successfulApiRequestMessages" },
    },
  },
};

export const apiPathReturn = () => {
  let result = {};
  let keys = Object.keys(API_PATH);

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = {
      path: API_PATH[keys[i]].path,
      requestBeforeDataSettings: API_PATH[keys[i]].requestBeforeDataSettings,
      requestAfterDataSettings: API_PATH[keys[i]].requestAfterDataSettings,
    };
  }

  return result;
};

export const apiEsWithSuccessMessage = () => {
  let result = [];
  let keys = Object.keys(API_PATH);

  for (let i = 0; i < keys.length; i++) {
    if (
      API_PATH[keys[i]].toast?.success &&
      API_PATH[keys[i]].toast?.success?.active
    ) {
      result.push({
        path: API_PATH[keys[i]].path,
        message: API_PATH[keys[i]].toast?.success?.message,
      });
    }
  }

  return result;
};
