import React from "react";

import SidebarNavSection from "./content/SidebarNavSection";
import "../../../vendor/perfect-scrollbar.css";
import { sidebarRouterArrReturn } from "../../../utils/constants/routerConstant";

import ReactPerfectScrollbar from "react-perfect-scrollbar";
import styled, { css } from "styled-components/macro";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { List } from "@mui/material";

const baseScrollbar = css`
  background-color: ${(props) => props.theme.sidebar.background};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  flex-grow: 1;
`;

const Scrollbar = styled.div`
  ${baseScrollbar}
`;

const PerfectScrollbar = styled(ReactPerfectScrollbar)`
  ${baseScrollbar}
`;

const Items = styled.div`
  padding-top: ${(props) => props.theme.spacing(2.5)};
  padding-bottom: ${(props) => props.theme.spacing(2.5)};
`;

const Content = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const ScrollbarComponent = matches ? PerfectScrollbar : Scrollbar;

  return (
    <ScrollbarComponent>
      <List disablePadding>
        <Items>
          {sidebarRouterArrReturn().map((routeItem, index) => (
            <SidebarNavSection
              component="div"
              key={index}
              itemInfo={routeItem}
            />
          ))}
        </Items>
      </List>
    </ScrollbarComponent>
  );
};

export default Content;
