import LineAxisIcon from "@mui/icons-material/LineAxis";
import PeopleIcon from "@mui/icons-material/People";
import { Grid } from "react-feather";

const WRAPPER = {
  CUSTOM_COMPONENTS: {
    label: "routerPageText.sidebarCustomComponents",
    key: "CUSTOM_COMPONENTS",
    icon: Grid,
  },

  CORE_COMPONENTS: {
    label: "routerPageText.sidebarCoreComponents",
    key: "CORE_COMPONENTS",
    icon: Grid,
  },

  AUTH: {
    label: "routerPageText.sidebarAuth",
    key: "AUTH",
    icon: PeopleIcon,
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
    label: "routerPageText.sidebarSignUp",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "AUTH",
  },

  SIGN_IN: {
    path: "/sign-in",
    label: "routerPageText.sidebarSignIn",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "AUTH",
  },

  VERIFY_SIGN_IN: {
    path: "/verify-sign-in",
    label: "routerPageText.sidebarVerifySignIn",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "AUTH",
  },

  RESET_PASSWORD: {
    path: "/reset-password",
    label: "routerPageText.sidebarResetPassword",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "AUTH",
  },

  FORGOT_PASSWORD: {
    path: "/forgot-password",
    label: "routerPageText.sidebarForgotPassword",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "AUTH",
  },
};

const COMPONENTS_ROUTER = {
  BUTTONS_CUSTOM: {
    path: "/buttons",
    label: "routerPageText.sidebarButtons",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "CUSTOM_COMPONENTS",
  },

  ALERTS_CUSTOM: {
    path: "/alerts",
    label: "routerPageText.sidebarAlerts",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "CUSTOM_COMPONENTS",
  },

  TEXT_EDITOR_CUSTOM: {
    path: "/text-editor",
    label: "routerPageText.sidebarTextEditor",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "CUSTOM_COMPONENTS",
  },

  ADVANCED_SELECT_CUSTOM: {
    path: "/custom/advanced-select",
    label: "routerPageText.sidebarAdvancedSelect",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "CUSTOM_COMPONENTS",
  },

  BUTTON_CORE: {
    path: "/core/button",
    label: "routerPageText.sidebarButton",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "CORE_COMPONENTS",
  },

  ALERT_CORE: {
    path: "/core/alert",
    label: "routerPageText.sidebarAlert",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "CORE_COMPONENTS",
  },

  TYPOGRAPHY_CORE: {
    path: "/core/typography",
    label: "routerPageText.sidebarTypography",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "CORE_COMPONENTS",
  },

  TEXT_FIELD_CORE: {
    path: "/core/text-field",
    label: "routerPageText.sidebarTextField",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "CORE_COMPONENTS",
  },

  SNACKBAR_CORE: {
    path: "/core/snackbar",
    label: "routerPageText.sidebarSnackbar",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "CORE_COMPONENTS",
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
