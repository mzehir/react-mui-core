import { toast } from "react-toastify";
import { DEFAULT_SETTINGS } from "./settings/generalSettings";

export function Toastify({
  type = DEFAULT_SETTINGS.type.value,
  position = DEFAULT_SETTINGS.position.value,
  autoClose = DEFAULT_SETTINGS.autoClose,
  hideProgressBar = DEFAULT_SETTINGS.hideProgressBar,
  closeOnClick = DEFAULT_SETTINGS.closeOnClick,
  pauseOnHover = DEFAULT_SETTINGS.pauseOnHover,
  draggable = DEFAULT_SETTINGS.draggable,
  progress = DEFAULT_SETTINGS.progress,
  message = DEFAULT_SETTINGS.message,
  theme = DEFAULT_SETTINGS.theme.value,
}) {
  console.log();
  toast[type](message, {
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: closeOnClick,
    pauseOnHover: pauseOnHover,
    draggable: draggable,
    progress: progress,
    theme: theme,
  });
}
