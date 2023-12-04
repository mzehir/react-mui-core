import React from "react";
import styled from "styled-components";

import ButtonComp from "../../../components/Button";
import BoxComp from "../../../components/Box";
import DividerComp from "../../../components/Divider";
import TypographyComp from "../../../components/Typography";
import { CardComp, CardContentComp } from "../../../components/Card";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);

const SidebarButton = ({ activeItemKey, onClick, item }) => {
  return (
    <Card>
      <CardContentComp sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        <ButtonComp
          id={`btn-${item.key}-id`}
          color="secondary"
          fullWidth={true}
          onClick={() => onClick(item.key)}
          disabled={item.key === activeItemKey}
        >
          <BoxComp
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <BoxComp display="flex" gap="3px">
              <item.icon />
              <DividerComp orientation="vertical" flexItem />
              <TypographyComp>{item.label}</TypographyComp>
            </BoxComp>

            <BoxComp display="flex">
              <NavigateNextIcon />
            </BoxComp>
          </BoxComp>
        </ButtonComp>
      </CardContentComp>
    </Card>
  );
};

export default SidebarButton;
