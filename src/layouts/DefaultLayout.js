import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";

import Navbar from "../components/multibleComp/navbar/Navbar";
import Sidebar from "../components/multibleComp/Sidebar";
import Footer from "../components/multibleComp/Footer";
import Settings from "../components/multibleComp/settings/Settings";
import GlobalStyle from "../components/GlobalStyle";
import BoxComp from "../components/Box";
import PaperComp from "../components/Paper";

import { CssBaseline } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { spacing } from "@mui/system";

const drawerWidth = 258;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Drawer = styled.div`
  ${(props) => props.theme.breakpoints.up("md")} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const Paper = styled(PaperComp)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;
const DefaultLayout = ({ children }) => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <Drawer>
        <BoxComp sx={{ display: { xs: "block", lg: "none" } }}>
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </BoxComp>
        <BoxComp sx={{ display: { xs: "none", md: "block" } }}>
          <Sidebar PaperProps={{ style: { width: drawerWidth } }} />
        </BoxComp>
      </Drawer>

      <AppContent>
        <Navbar onDrawerToggle={handleDrawerToggle} />
        <MainContent p={isLgUp ? 12 : 5}>
          <>
            {children}
            <Outlet />
          </>
        </MainContent>

        <Footer />
      </AppContent>
      <Settings />
    </Root>
  );
};

export default DefaultLayout;
