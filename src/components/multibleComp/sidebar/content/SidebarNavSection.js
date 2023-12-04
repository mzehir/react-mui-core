import React from "react";
import styled from "styled-components/macro";
import { rgba, darken } from "polished";

import NestedSidebarNavSection from "./NestedSidebarNavSection";
import CustomRouterLink from "./CustomRouterLink";
import ListItemTextComp from "../../../ListItemText";

import ListItemButton from "@mui/material/ListItemButton";

const Title = styled(ListItemTextComp)`
  margin: 0;
  span {
    color: ${(props) =>
      rgba(
        props.theme.sidebar.color,
        props.depth && props.depth > 0 ? 0.7 : 1
      )};
    font-size: ${(props) => props.theme.typography.body1.fontSize}px;
    padding: 0 ${(props) => props.theme.spacing(4)};
  }
`;

const Item = styled(ListItemButton)`
  padding-top: ${(props) =>
    props.theme.spacing(props.depth && props.depth > 0 ? 2 : 3)};
  padding-bottom: ${(props) =>
    props.theme.spacing(props.depth && props.depth > 0 ? 2 : 3)};
  padding-left: ${(props) =>
    props.theme.spacing(props.depth && props.depth > 0 ? 14 : 8)};
  padding-right: ${(props) =>
    props.theme.spacing(props.depth && props.depth > 0 ? 4 : 7)};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  svg {
    color: ${(props) => props.theme.sidebar.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: ${(props) => props.theme.sidebar.color};
  }
  &.${(props) => props.activeclassname} {
    background-color: ${(props) =>
      darken(0.03, props.theme.sidebar.background)};
    span {
      color: ${(props) => props.theme.sidebar.color};
    }
  }
`;

const SidebarNavSection = (props) => {
  const {
    title,
    pages,
    className,
    itemInfo,
    component: Component = "nav",
    ...rest
  } = props;

  return (
    <Component {...rest}>
      {itemInfo.routers ? (
        <NestedSidebarNavSection
          itemInfo={itemInfo}
          Item={Item}
          Title={Title}
        />
      ) : (
        <Item
          component={CustomRouterLink}
          to={itemInfo.path}
          activeclassname="active"
        >
          {itemInfo.icon && <itemInfo.icon />}
          <Title>{itemInfo.label}</Title>
        </Item>
      )}
    </Component>
  );
};

export default SidebarNavSection;
