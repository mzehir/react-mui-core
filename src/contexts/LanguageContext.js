import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../utils/constants/languageConstant";
import {
  languageGetItem,
  languageSetItem,
} from "../utils/helper/localStorageOperations";
import { translateBefore } from "./LanguageContextHelperMethods";

const initialState = {
  language: null,
};

const LanguageContext = React.createContext(initialState);

function LanguageProvider({ children }) {
  const { i18n, t } = useTranslation();

  const initialState = () => {
    const storedLanguage = languageGetItem(true);
    return storedLanguage || LANGUAGES.EN.key;
  };

  const [language, _setLanguage] = React.useState(initialState);

  const setLanguage = (language) => {
    _setLanguage(language);
  };

  function translate(translateWordKey) {
    const { wordKey, wordProps } = translateBefore(translateWordKey);

    if (wordProps) {
      return t(wordKey, { ...wordProps });
    } else {
      return t(wordKey);
    }
  }

  useEffect(() => {
    if (language) {
      languageSetItem(language, true);
      i18n.changeLanguage(language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translate: translate }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };
