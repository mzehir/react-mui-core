import React from "react";
import { Outlet } from "react-router-dom";

import ThemeUseContext from "../hooks/ThemeUseContext";
import createTheme from "../theme";
import GlobalStyle from "../components/GlobalStyle";
import Settings from "../components/multibleComp/settings/Settings";

import styled, { ThemeProvider } from "styled-components/macro";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PresentationLayout = ({ children }) => {
  const { theme } = ThemeUseContext();
  return (
    <MuiThemeProvider theme={createTheme(theme)}>
      <ThemeProvider theme={createTheme(theme)}>
        <Root>
          <CssBaseline />
          <GlobalStyle />
          <AppContent>
            {children}
            <Outlet />
          </AppContent>
          <Settings />
        </Root>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default PresentationLayout;
