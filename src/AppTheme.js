import React from "react";

import { ThemeProvider } from "./contexts/ThemeContext";

import StylesProvider from "@mui/styles/StylesProvider";
import jssPreset from "@mui/styles/jssPreset";
import { create } from "jss";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { getLocale } from "./utils/helper/localizationProviderHelper";

import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components/macro";
import createTheme from "./theme";
import ThemeUseContext from "./hooks/ThemeUseContext";

import App from "./App";

function AppTheme() {
  return (
    <ThemeProvider>
      <AppThemeOther />
    </ThemeProvider>
  );
}

export default AppTheme;

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});

function AppThemeOther() {
  const { theme } = ThemeUseContext();

  return (
    <StylesProvider jss={jss}>
      <LocalizationProvider locale={getLocale()} dateAdapter={AdapterDateFns}>
        <StyledEngineProvider injectFirst>
          <MuiThemeProvider theme={createTheme(theme)}>
            <StyledComponentsThemeProvider theme={createTheme(theme)}>
              <App />
            </StyledComponentsThemeProvider>
          </MuiThemeProvider>
        </StyledEngineProvider>
      </LocalizationProvider>
    </StylesProvider>
  );
}
