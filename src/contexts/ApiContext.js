import React, { createContext, useReducer } from "react";
import axios from "../service/axios";
import { Toastify } from "../components/toastify/toastify";
import { API_ERROR_CONSTANT } from "../utils/constants/appConstants/apiErrorConstant";
import {
  apiPathReturn,
  apiEsWithSuccessMessage,
} from "../utils/constants/apiConstant";
import {
  getIdleTimeOutDuration,
  setIdleTimeOut,
} from "../utils/helper/sessionStorage";

export const APIPath = apiPathReturn(); //* tüm apiler
export const apiEsWithSuccessMessageArr = apiEsWithSuccessMessage(); //* istek atıldıktan sonra api ile ilgili başarı toast'ı gösterilecek apiler

const initialStates = {
  loading: false,
  apiError: null,
  httpError: null,
  showLoginDialog: false,
  showVerifyLoginDialog: false,
};

const StateReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_BEFORE":
      return {
        ...state,
        loading: action.payload.loading,
      };
    case "API_ERROR":
      return {
        ...state,
        apiError: action.payload.apiError,
      };
    case "HTTP_ERROR":
      return {
        ...state,
        httpError: action.payload.httpError,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

const ApiContext = createContext(initialStates);

function ApiProvider({ children }) {
  const [state, dispatch] = useReducer(StateReducer, initialStates);

  const runToast = (type, message) => {
    Toastify({
      type: type ? type : "info",
      message: message ? message : "Message not found!",
    });
  };

  const httpRequest = async (
    method,
    path,
    data = {},
    options = {
      showLoading: true,
      showLoginDialog: true,
      headers: {},
    }
  ) => {
    let res = {
      data: {
        isSuccess: false,
      },
    };
    try {
      dispatch({
        type: "REQUEST_BEFORE",
        payload: {
          loading: options.showLoading || state.loading,
        },
      });

      res = await axios[method](path, data, { headers: options.headers });

      //* istek atılacak olan api başarı mesajı içeriyor mu? && toast'da göster
      let isCurrentApiContainASuccessMessage =
        apiEsWithSuccessMessageArr.filter((x) => x.path === path);

      if (isCurrentApiContainASuccessMessage.length > 0) {
        runToast("success", "t(isCurrentApiContainASuccessMessage[0].message)");
      }
      //* istek atılacak olan api başarı mesajı içeriyor mu? && toast'da göster

      //* idle timeout
      let idleTimeOut = getIdleTimeOutDuration();
      if (idleTimeOut) {
        setIdleTimeOut(Date.now() + idleTimeOut);
      }
      //* idle timeout
    } catch (error) {
      if (error.apiError) {
        dispatch({
          type: "API_ERROR",
          payload: {
            apiError: error,
          },
        });

        if (API_ERROR_CONSTANT[error.apiErrorCode].alert?.open) {
          runToast(
            API_ERROR_CONSTANT[error.apiErrorCode].alert.severity,
            API_ERROR_CONSTANT[error.apiErrorCode].alert.text
          );
        }
      } else {
        dispatch({
          type: "HTTP_ERROR",
          payload: {
            httpError: error,
          },
        });
      }
    } finally {
      dispatch({
        type: "LOADING",
        payload: {
          loading: false,
        },
      });

      return res.data;
    }
  };

  const postData = async (
    path,
    data = {},
    options = {
      showLoading: true,
      showLoginDialog: true,
      headers: {},
    }
  ) => {
    return httpRequest("post", path, data, options);
  };

  const getData = async (
    path,
    data = {},
    options = {
      showLoading: true,
      showLoginDialog: true,
    }
  ) => {
    return httpRequest("get", path, data, options);
  };

  return (
    <ApiContext.Provider
      value={{
        ...state,
        APIPath,
        postData,
        getData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export { ApiContext, ApiProvider };
