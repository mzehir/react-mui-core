export const TOAST_TYPE = {
  INFO: { value: "info", label: "info" },
  SUCCESS: { value: "success", label: "success" },
  WARN: { value: "warn", label: "warn" },
  ERROR: { value: "error", label: "error" },
};

export const TOAST_POSITION = {
  TOP_LEFT: { value: "top-left", label: "top-left" },
  TOP_RIGHT: { value: "top-right", label: "top-right" },
  TOP_CENTER: { value: "top-center", label: "top-center" },
  BOTTOM_LEFT: { value: "bottom-left", label: "bottom-left" },
  BOTTOM_RIGHT: { value: "bottom-right", label: "bottom-right" },
  BOTTOM_CENTER: { value: "bottom-center", label: "bottom-center" },
};

export const TOAST_THEME = {
  LIGHT: { value: "light", label: "light" },
  DARK: { value: "dark", label: "dark" },
  COLORED: { value: "colored", label: "colored" },
};

export const toastTypePrepareArr = () => {
  let toastType = TOAST_TYPE;
  let toastTypeArr = Object.values(toastType);
  return toastTypeArr;
};

export const toastPositionPrepareArr = () => {
  let toastPosition = TOAST_POSITION;
  let toastPositionArr = Object.values(toastPosition);
  return toastPositionArr;
};

export const toastThemePrepareArr = () => {
  let toastTheme = TOAST_THEME;
  let toastThemeArr = Object.values(toastTheme);
  return toastThemeArr;
};

export const DEFAULT_SETTINGS = {
  message: { TR: "Gösterilecek ileti yok!", EN: "No messages to show!" },
  type: {
    value: TOAST_TYPE.INFO.value,
    label: TOAST_TYPE.INFO.label,
  },
  position: {
    value: TOAST_POSITION.TOP_RIGHT.value,
    label: TOAST_POSITION.TOP_RIGHT.label,
  },
  theme: {
    value: TOAST_THEME.LIGHT.value,
    label: TOAST_THEME.LIGHT.label,
  },
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
