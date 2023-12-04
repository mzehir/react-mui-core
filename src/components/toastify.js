import { toast } from "react-toastify";

export function Toastify({
  type, //? => "info" | "success" | "warn" | "error" | default(Herhangi bir değer gönderilmediğinde)
  position, //? => "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"
  autoClose, //? => Milisaniye cinsiden integer değer
  hideProgressBar, //? => true | false
  closeOnClick, //? => true | false
  pauseOnHover, //? => true | false
  draggable, //? => true | false
  progress, //? =>
  message, //? => String tipinde gösterilecek metin...
}) {
  toast[type](message ? message : "Gösterilecek ileti yok!!!", {
    position: position ? position : "top-right",
    autoClose: autoClose ? autoClose : 5000,
    hideProgressBar: hideProgressBar ? hideProgressBar : false,
    closeOnClick: closeOnClick ? closeOnClick : true,
    pauseOnHover: pauseOnHover ? pauseOnHover : true,
    draggable: draggable ? draggable : true,
    progress: progress ? progress : undefined,
  });
}
