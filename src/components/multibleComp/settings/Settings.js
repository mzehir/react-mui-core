import React, { useState } from "react";
import styled from "styled-components/macro";

import Wrapper from "./Wrapper";
import FabComp from "../../Fab";
import DrawerComp from "../../Drawer";

import SettingsIcon from "@mui/icons-material/Settings";

const FabStyled = styled(FabComp)`
  position: fixed;
  right: ${(props) => props.theme.spacing(8)};
  bottom: ${(props) => props.theme.spacing(8)};
  z-index: 1;
`;

function Settings() {
  const [state, setState] = useState({
    isOpen: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ ...state, isOpen: open });
  };

  return (
    <React.Fragment>
      <FabStyled color="primary" aria-label="Edit" onClick={toggleDrawer(true)}>
        <SettingsIcon />
      </FabStyled>

      <DrawerComp
        anchor="right"
        open={state.isOpen}
        onClose={toggleDrawer(false)}
      >
        <Wrapper />
      </DrawerComp>
    </React.Fragment>
  );
}

export default Settings;
