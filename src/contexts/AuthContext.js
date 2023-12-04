import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import ApiUseContext from "../hooks/ApiUseContext";
import { isValidToken } from "./AuthContextHelperMethods";

import {
  axiosAuthorizationDeleteToken,
  axiosAuthorizationSetToken,
} from "../service/axiosHelperMethods";
import { ROUTER } from "../utils/constants/routerConstant";
import {
  SEARCH_PARAMS_KEY,
  STATE_KEY,
} from "../utils/constants/locationStateKey";
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
  setSessionTimeOut,
  removeSessionTimeOut,
  setBypassVerifyToken,
  setIdleTimeOutDuration,
  setIdleTimeOut,
  removeIdleTimeOut,
  removeIdleTimeOutDuration,
} from "../utils/helper/sessionStorage";

const initialProjectState = {
  isInitialized: false,
};

const initialUserState = {
  name: null,
  surname: null,
  image: null,
  email: null,
  phone: null,
  birthDate: null,
  lang: null,
  theme: null,

  id: null,
  isAuthenticated: false,
};

const ProjectStateReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

const UserStateReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        image: action.payload.image,
        email: action.payload.email,
        phone: action.payload.phone,
        birthDate: action.payload.birthDate,
        lang: action.payload.lang,
        theme: action.payload.theme,

        id: action.payload.id,
        isAuthenticated: true,
      };

    case "SIGN_IN":
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        image: action.payload.image,
        email: action.payload.email,
        phone: action.payload.phone,
        birthDate: action.payload.birthDate,
        lang: action.payload.lang,
        theme: action.payload.theme,

        id: action.payload.id,
        isAuthenticated: true,
      };

    case "CLEAR":
      return {
        ...state,
        type: "",
        name: "",
        surname: "",
        image: "",
        email: "",
        phone: "",
        birthDate: "",

        id: "",
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const { APIPath, postData } = ApiUseContext();
  const navigate = useNavigate();

  const [projectState, projectDispatch] = useReducer(
    ProjectStateReducer,
    initialProjectState
  );

  const [userState, userDispatch] = useReducer(
    UserStateReducer,
    initialUserState
  );

  const authCheckUserDataSettings = async (
    responseCriticalUserData,
    responseAuthendicatedUserData,
    type
  ) => {
    if (type !== "INITIALIZE") {
      //* 1
      setAccessToken(responseCriticalUserData.accessToken);
      axiosAuthorizationSetToken(responseCriticalUserData.accessToken);

      //* 2
      const decoded = jwtDecode(responseCriticalUserData.accessToken);
      if (decoded.isDeferrable) {
        setSessionTimeOut(decoded.exp * 1000);
      } else {
        removeSessionTimeOut();
      }

      //* 3
      if (responseCriticalUserData.bypassVerifyToken) {
        const decodedBypassVerifyToken = jwtDecode(
          responseCriticalUserData.accessToken
        );

        setBypassVerifyToken(
          responseCriticalUserData.bypassVerifyToken,
          decodedBypassVerifyToken.exp * 1000
        );
      }

      //* 4
      if (responseCriticalUserData.idleTimeOut) {
        setIdleTimeOutDuration(responseCriticalUserData.idleTimeOut);
        setIdleTimeOut(responseCriticalUserData.idleTimeOut + Date.now());
      }
    }

    //* 5
    // disconnectSocket(socket);
    // let createdSocket = await connectSocket(userSessionInfo.accessToken);
    // setSocket(createdSocket);

    userDispatch({
      type: "SIGN_IN",
      payload: {
        ...responseAuthendicatedUserData,
      },
    });

    if (type !== "INITIALIZE") {
      navigate(ROUTER.DASHBOARD.path);
    }
  };

  const signUp = async (values, callback) => {
    const { requestData } = await APIPath.SIGN_UP.requestBeforeDataSettings(
      values
    );

    const response = await postData(APIPath.SIGN_UP.path, requestData);

    const { responseData } = await APIPath.SIGN_UP.requestAfterDataSettings(
      response
    );

    if (responseData?.isSuccess) {
      return callback();
    } else {
      alert(
        "Bir hata ile karşılaşıldı! Tekrar kayıt olmayı deneyin yada yönetici ile iletişime geçin."
      );
    }
  };

  const signIn = async (values) => {
    const { requestData } = await APIPath.SIGN_IN.requestBeforeDataSettings(
      values
    );

    const response = await postData(APIPath.SIGN_IN.path, requestData);

    if (response.isSuccess) {
      const {
        responseTokenData,
        responseCriticalUserData,
        responseAuthendicatedUserData,
      } = await APIPath.SIGN_IN.requestAfterDataSettings(response.data);

      let isCheckVerifySigIn = responseTokenData.token;
      let isCheckIsPaswordExpired = responseCriticalUserData.isPaswordExpired;

      if (isCheckVerifySigIn) {
        // verifySignIn Ok
        navigate(ROUTER.VERIFY_SIGN_IN.path, {
          state: {
            [STATE_KEY.VERIFICATION_TOKEN.key]: responseTokenData.token,
          },
        });
      } else if (isCheckIsPaswordExpired) {
        // PaswordExpired ok
        navigate(
          ROUTER.RESET_PASSWORD.path +
            SEARCH_PARAMS_KEY.CREATE_PASSWORD_TOKEN.key +
            responseCriticalUserData.createPaswordToken
        );
      } else {
        // Auth Ok
        authCheckUserDataSettings(
          responseCriticalUserData,
          responseAuthendicatedUserData
        );
      }
    }
  };

  const verifySignIn = async (values) => {
    const { requestData } =
      await APIPath.VERIFY_SIGN_IN.requestBeforeDataSettings(values);

    const response = await postData(APIPath.VERIFY_SIGN_IN.path, requestData);

    if (response.isSuccess) {
      const { responseCriticalUserData, responseAuthendicatedUserData } =
        await APIPath.VERIFY_SIGN_IN.requestAfterDataSettings(response.data);

      let isCheckIsPaswordExpired = responseCriticalUserData.isPaswordExpired;

      if (isCheckIsPaswordExpired) {
        // PaswordExpired ok
        navigate(
          ROUTER.RESET_PASSWORD.path +
            SEARCH_PARAMS_KEY.CREATE_PASSWORD_TOKEN.key +
            responseCriticalUserData.createPaswordToken
        );
      } else {
        // Auth Ok
        authCheckUserDataSettings(
          responseCriticalUserData,
          responseAuthendicatedUserData
        );
      }
    }
  };

  const signOut = async () => {
    const accessToken = getAccessToken();
    if (accessToken && isValidToken(accessToken)) {
      await postData(APIPath.SIGN_OUT.path);
    }

    // disconnectSocket(socket);
    // removeBypassVerifyToken
    removeAccessToken();
    removeIdleTimeOut();
    removeIdleTimeOutDuration();
    removeSessionTimeOut();
    axiosAuthorizationDeleteToken();
    userDispatch({
      type: "CLEAR",
    });

    navigate(ROUTER.SIGN_IN.path);
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = getAccessToken();

        if (accessToken && isValidToken(accessToken)) {
          axiosAuthorizationSetToken(accessToken);

          const response = await postData(
            APIPath.GET_AUTHENDICATION_USER_INFO.path
          );

          if (response.isSuccess) {
            const { responseAuthendicatedUserData } =
              await APIPath.GET_AUTHENDICATION_USER_INFO.requestAfterDataSettings(
                response.data
              );

            authCheckUserDataSettings(
              null,
              responseAuthendicatedUserData,
              "INITIALIZE"
            );
          } else {
            signOut();
          }
        } else {
          // signOut();
        }
      } catch (err) {
        console.error(err);
        // signOut();
      } finally {
        projectDispatch({
          type: "INITIALIZE",
        });
      }
    };

    if (!projectState?.isInitialized) {
      initialize();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...userState,
        signUp,
        signIn,
        verifySignIn,
        signOut,
      }}
    >
      {projectState.isInitialized && children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
