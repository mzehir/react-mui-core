import React from "react";
import CustomRouterLink from "./CustomRouterLink";

import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const NestedSidebarNavSection = ({ itemInfo, Item, Title }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Item component="div" onClick={handleClick}>
        <itemInfo.icon />
        <Title>{itemInfo.label}</Title>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Item>

      <Collapse in={open} timeout="auto" unmountOnExit>
        {itemInfo.routers.map((router, index) => (
          <List key={index} disablePadding>
            <Item
              component={CustomRouterLink}
              to={router.path}
              activeclassname="active"
            >
              {/* <Title primary={router.label} /> */}
              <Title>{router.label}</Title>
            </Item>
          </List>
        ))}
      </Collapse>
    </>
  );
};

export default NestedSidebarNavSection;
