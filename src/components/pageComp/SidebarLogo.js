import React from "react";
import styled from "styled-components/macro";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const BrandIcon = styled(Logo)`
  margin-right: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 32px;
  height: 32px;
`;

function SidebarLogo() {
  return <BrandIcon />;
}

export default SidebarLogo;
