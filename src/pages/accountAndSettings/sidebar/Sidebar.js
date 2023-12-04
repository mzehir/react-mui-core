import React from "react";
import styled from "styled-components/macro";

import SidebarButton from "../components/SidebarButton";
import BoxComp from "../../../components/Box";

const Box = styled(BoxComp)`
  width: 100%;
`;

const Sidebar = ({ activeItemKey, itemOnClick, sidebarItems }) => {
  return (
    <Box display="flex" flexDirection="column" gap="3px">
      {sidebarItems.map((item, index) => (
        <Box key={index}>
          <SidebarButton
            activeItemKey={activeItemKey}
            onClick={itemOnClick}
            item={item}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
