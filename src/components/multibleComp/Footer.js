import * as React from "react";
import styled from "styled-components/macro";

import GridComp from "../Grid";
import ListItemButtonComp from "../ListItemButton";
import ListItemTextComp from "../ListItemText";

import { List } from "@mui/material";

import { useSelector } from "react-redux";
import { generalAppConfigs } from "../../redux/actions/generalAppConfigAction";

const Wrapper = styled.div`
  padding: ${(props) => props.theme.spacing(0.25)}
    ${(props) => props.theme.spacing(4)};
  background: ${(props) => props.theme.footer.background};
  position: relative;
`;

const ListItemButton = styled(ListItemButtonComp)`
  display: inline-block;
  width: auto;
  padding-left: ${(props) => props.theme.spacing(2)};
  padding-right: ${(props) => props.theme.spacing(2)};

  &,
  &:hover,
  &:active {
    color: #ff0000;
  }
`;

const ListItemText = styled(ListItemTextComp)`
  span {
    color: ${(props) => props.theme.footer.color};
  }
`;

function Footer() {
  const appConfigs = useSelector(generalAppConfigs);

  return (
    <Wrapper>
      <GridComp container spacing={0}>
        <GridComp
          sx={{ display: { xs: "none", md: "block" } }}
          container
          item
          xs={12}
          md={6}
        >
          <List>
            {/* <ListItemButton component="a" href="#">
              <ListItemText>componentsText.support</ListItemText>
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText>componentsText.helpCenter</ListItemText>
            </ListItemButton> */}
          </List>
        </GridComp>
        <GridComp container item xs={12} md={6} justifyContent="flex-end">
          <List>
            <ListItemButton>
              <ListItemText
                primary={`© ${new Date().getFullYear()} - ${
                  appConfigs.appName
                } `}
              />
            </ListItemButton>
          </List>
        </GridComp>
      </GridComp>
    </Wrapper>
  );
}

export default Footer;
