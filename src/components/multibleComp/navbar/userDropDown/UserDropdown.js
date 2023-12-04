import React, { useState } from "react";
import styled from "styled-components/macro";

import IconButtonComp from "../../../IconButton";
import TooltipComp from "../../../Tooltip";
import Items from "./Items";

import { Power } from "react-feather";

const IconButton = styled(IconButtonComp)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function UserDropdown() {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };
  return (
    <React.Fragment>
      <TooltipComp title="componentsText.account">
        <IconButton
          id="btn-user-dropdown"
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
        >
          <Power />
        </IconButton>
      </TooltipComp>

      <Items anchorMenu={anchorMenu} closeMenu={closeMenu} />
    </React.Fragment>
  );
}

export default UserDropdown;
