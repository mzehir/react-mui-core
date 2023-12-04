import React from "react";
import { ToastContainer } from "react-toastify";

import "./i18n/i18n";
import "react-toastify/dist/ReactToastify.css";

import { LanguageProvider } from "./contexts/LanguageContext";
import { ApiProvider } from "./contexts/ApiContext";
import { AuthProvider } from "./contexts/AuthContext";
import { Router } from "./router/Router";
import OverlayComp from "./components/customizedComp/Overlay";

function App() {
  return (
    <LanguageProvider>
      <ApiProvider>
        <AuthProvider>
          <ToastContainer />
          <Router />
          <OverlayComp />
        </AuthProvider>
      </ApiProvider>
    </LanguageProvider>
  );
}

export default App;
