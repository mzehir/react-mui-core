import * as React from "react";
import styled, { withTheme } from "styled-components/macro";

import UserDropdown from "./userDropDown/UserDropdown";
import GridComp from "../../Grid";
import IconButtonComp from "../../IconButton";

import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar as MuiAppBar, Toolbar } from "@mui/material";

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
  border-bottom: 1px solid gray;
`;

const IconButton = styled(IconButtonComp)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Navbar = ({ onDrawerToggle }) => {
  return (
    <React.Fragment>
      <AppBar id="defaultLayoutTitleID" position="sticky" elevation={0}>
        <Toolbar>
          <GridComp container alignItems="center">
            <GridComp item sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </GridComp>

            <GridComp item xs />

            <GridComp item>
              <UserDropdown />
            </GridComp>
          </GridComp>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withTheme(Navbar);
