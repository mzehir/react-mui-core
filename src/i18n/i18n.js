import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locale/en.json";
import tr from "./locale/tr.json";

const resources = {
  EN: {
    translation: {
      ...en,
    },
  },
  TR: {
    translation: {
      ...tr,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "EN",
  fallbackLng: "EN",
  interpolation: {
    escapeValue: false,
  },
});
