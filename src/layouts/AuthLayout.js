import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";

import Settings from "../components/multibleComp/settings/Settings";
import GlobalStyle from "../components/GlobalStyle";

import { CssBaseline } from "@mui/material";

const Root = styled.div`
  max-width: 520px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const AuthLayout = ({ children }) => {
  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      {children}
      <Outlet />
      <Settings />
    </Root>
  );
};

export default AuthLayout;
