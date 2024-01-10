export const TOAST_TYPE = {
  INFO: { value: "info", label: "Info" },
  SUCCESS: { value: "success", label: "Success" },
  WARN: { value: "warn", label: "Warn" },
  ERROR: { value: "error", label: "Error" },
};

export const TOAST_POSITION = {
  TOP_LEFT: { value: "top-left", label: "Top-Left" },
  TOP_RIGHT: { value: "top-right", label: "Top-Right" },
  TOP_CENTER: { value: "top-center", label: "Top-Center" },
  BOTTOM_LEFT: { value: "bottom-left", label: "Bottom-Left" },
  BOTTOM_RIGHT: { value: "bottom-right", label: "Bottom-Right" },
  BOTTOM_CENTER: { value: "bottom-center", label: "Bottom-Center" },
};

export const TOAST_THEME = {
  LIGHT: { value: "light", label: "Light" },
  DARK: { value: "dark", label: "Dark" },
  COLORED: { value: "colored", label: "Colored" },
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
