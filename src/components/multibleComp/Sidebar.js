import React from "react";

import Header from "./sidebar/Header";
import Content from "./sidebar/Content";
import Footer from "./sidebar/Footer";

import styled from "styled-components/macro";
import { Drawer as MuiDrawer } from "@mui/material";

const Drawer = styled(MuiDrawer)`
  border-right: 0;

  > div {
    border-right: 0;
  }
`;

const Sidebar = ({ items, showFooter = true, ...rest }) => {
  return (
    <Drawer variant="permanent" {...rest}>
      <Header />
      <Content />
      {!!showFooter && <Footer />}
    </Drawer>
  );
};

export default Sidebar;
