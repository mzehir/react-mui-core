import React from "react";
import styled from "styled-components/macro";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const Brand = styled(Logo)`
  fill: ${(props) => props.theme.palette.primary.main};
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
`;

function AuthLogo() {
  return <Brand />;
}

export default AuthLogo;
