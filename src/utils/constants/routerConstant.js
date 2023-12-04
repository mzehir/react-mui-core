import LineAxisIcon from "@mui/icons-material/LineAxis";
import { Grid } from "react-feather";

const WRAPPER = {
  COMPONENTS: {
    label: "routerPageText.sidebarCustomComponents",
    key: "COMPONENTS",
    icon: Grid,
  },
};

const PAGES_ROUTER = {
  DASHBOARD: {
    path: "/",
    label: "routerPageText.sidebarDashboard",
    icon: LineAxisIcon,
    sidebarVisible: true,
  },

  ACCOUNT_AND_SETTINGS: {
    path: "/account-settings",
    label: "routerPageText.accountAndSettings",
    icon: null,
    sidebarVisible: false,
  },
};

const AUTH_ROUTER = {
  SIGN_UP: {
    path: "/sign-up",
    label: "Sign Up",
    icon: null,
    sidebarVisible: false,
  },

  SIGN_IN: {
    path: "/sign-in",
    label: "Sign In",
    icon: null,
    sidebarVisible: false,
  },

  VERIFY_SIGN_IN: {
    path: "/verify-sign-in",
    label: "Verify Sign In",
    icon: null,
    sidebarVisible: false,
  },

  RESET_PASSWORD: {
    path: "/reset-password",
    label: "Reset Password",
    icon: null,
    sidebarVisible: false,
  },

  FORGOT_PASSWORD: {
    path: "/forgot-password",
    label: "Fogot Password",
    icon: null,
    sidebarVisible: false,
  },
};

const COMPONENTS_ROUTER = {
  BUTTONS: {
    path: "/buttons",
    label: "routerPageText.sidebarButtons",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "COMPONENTS",
  },

  TEXT_EDITOR: {
    path: "/text-editor",
    label: "routerPageText.sidebarTextEditor",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "COMPONENTS",
  },
};

export const ROUTER = {
  ...PAGES_ROUTER,
  ...AUTH_ROUTER,
  ...COMPONENTS_ROUTER,
};

export const sidebarRouterArrReturn = () => {
  let returnArr = [];
  let routerKeys = Object.keys(ROUTER);

  for (let i = 0; i < routerKeys.length; i++) {
    if (ROUTER[routerKeys[i]].sidebarVisible) {
      if (ROUTER[routerKeys[i]].isWrapper) {
        let isWrapperKeyIncludes = false;
        let kCount = -1;

        for (let k = 0; k < returnArr.length; k++) {
          if (returnArr[k].key === ROUTER[routerKeys[i]].wrapperKey) {
            isWrapperKeyIncludes = true;
            kCount = k;
          }
        }

        if (isWrapperKeyIncludes) {
          returnArr[kCount].routers.push(ROUTER[routerKeys[i]]);
        } else {
          let wrapperObj = WRAPPER[ROUTER[routerKeys[i]].wrapperKey];
          wrapperObj.routers = [ROUTER[routerKeys[i]]];
          returnArr.push(wrapperObj);
        }
      } else {
        returnArr.push(ROUTER[routerKeys[i]]);
      }
    }
  }

  return returnArr;
};
