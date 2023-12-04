import { languageGetItem } from "./localStorageOperations";
import { LANGUAGES } from "../constants/languageConstant";
import { tr, enUS } from "date-fns/locale";

export function getLocale() {
  const selectedLang = languageGetItem(true);

  if (!selectedLang) {
    return enUS;
  } else if (selectedLang === LANGUAGES.EN.key) {
    return enUS;
  } else if (selectedLang === LANGUAGES.TR.key) {
    return tr;
  } else {
    return enUS;
  }
}
