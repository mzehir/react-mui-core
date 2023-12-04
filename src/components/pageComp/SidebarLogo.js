import React from "react";
import styled from "styled-components/macro";

import LogoPNG from "../../assets/logo.png";

const CustomImg = styled.img`
  width: 32px;
  height: 32px;
`;

function SidebarLogo() {
  return (
    <CustomImg
      src={`${LogoPNG}?w=164&h=164&fit=crop&auto=format`}
      srcSet={`${LogoPNG}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      alt={"logo"}
      loading="lazy"
    />
  );
}

export default SidebarLogo;
