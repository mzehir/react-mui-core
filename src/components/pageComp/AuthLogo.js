import React from "react";
import styled from "styled-components/macro";

import LogoPNG from "../../assets/logo.png";

const CustomImg = styled.img`
  width: 96px;
  height: 96px;
  margin-bottom: 32px;
`;

function AuthLogo() {
  return (
    <CustomImg
      src={`${LogoPNG}?w=164&h=164&fit=crop&auto=format`}
      srcSet={`${LogoPNG}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      alt={"logo"}
      loading="lazy"
    />
  );
}

export default AuthLogo;
