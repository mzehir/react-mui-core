import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import ListItemButtonComp from "../../ListItemButton";
import SidebarLogo from "../../pageComp/SidebarLogo";
import SidebarAppName from "../../pageComp/SidebarAppName";

const Brand = styled(ListItemButtonComp)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.sidebar.header.color};
  background-color: ${(props) => props.theme.sidebar.header.background};
  font-family: ${(props) => props.theme.typography.fontFamily};
  min-height: 56px;
  padding-left: ${(props) => props.theme.spacing(6)};
  padding-right: ${(props) => props.theme.spacing(6)};
  justify-content: center;
  cursor: pointer;
  flex-grow: 0;

  border-bottom: 1px solid gray;

  ${(props) => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }

  &:hover {
    background-color: ${(props) => props.theme.sidebar.header.background};
  }
`;

const Header = () => {
  return (
    <Brand isTranslation={false} component={NavLink} to="/">
      <SidebarLogo />
      <SidebarAppName />
    </Brand>
  );
};

export default Header;
