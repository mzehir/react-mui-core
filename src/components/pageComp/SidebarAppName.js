import React from "react";
import styled from "styled-components/macro";

import ChipComp from "../Chip";
import BoxComp from "../Box";
import { APP_NAME } from "../../utils/config/config";

import { green } from "@mui/material/colors";
import { spacing } from "@mui/system";

const BrandChip = styled(ChipComp)`
  background-color: ${green[700]};
  border-radius: 5px;
  color: ${(props) => props.theme.palette.common.white};
  font-size: 55%;
  height: 18px;
  margin-left: 2px;
  margin-top: -16px;
  padding: 3px 0;

  span {
    padding-left: ${(props) => props.theme.spacing(1.375)};
    padding-right: ${(props) => props.theme.spacing(1.375)};
  }
`;

const BoxCompCustomize = styled(BoxComp)(spacing);

const SidebarAppName = () => {
  return (
    <BoxCompCustomize ml={1}>
      {APP_NAME} <BrandChip label="DEMO" />
    </BoxCompCustomize>
  );
};

export default SidebarAppName;
