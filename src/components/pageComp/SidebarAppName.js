import React from "react";
import styled from "styled-components/macro";

// import ChipComp from "../Chip";
import BoxComp from "../Box";

// import { green } from "@mui/material/colors";
import { spacing } from "@mui/system";

import { useSelector } from "react-redux";
import { generalAppConfigs } from "../../redux/actions/generalAppConfigAction";

// const BrandChip = styled(ChipComp)`
//   background-color: ${green[700]};
//   border-radius: 5px;
//   color: ${(props) => props.theme.palette.common.white};
//   font-size: 55%;
//   height: 18px;
//   margin-left: 2px;
//   margin-top: -16px;
//   padding: 3px 0;

//   span {
//     padding-left: ${(props) => props.theme.spacing(1.375)};
//     padding-right: ${(props) => props.theme.spacing(1.375)};
//   }
// `;

const BoxCompCustomize = styled(BoxComp)(spacing);

const SidebarAppName = () => {
  const appConfigs = useSelector(generalAppConfigs);
  return (
    <BoxCompCustomize ml={1}>
      {appConfigs.appName}
      {/* <BrandChip label="DEMO" /> */}
    </BoxCompCustomize>
  );
};

export default SidebarAppName;
