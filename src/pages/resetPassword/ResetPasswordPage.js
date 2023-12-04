import React from "react";
import styled from "styled-components/macro";

import LogoSection from "./sections/Logo";
import Title from "./sections/Title";
import Content from "./sections/Content";
import PaperComp from "../../components/Paper";

const Wrapper = styled(PaperComp)`
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

function ResetPasswordPage() {
  return (
    <React.Fragment>
      <LogoSection />

      <Wrapper>
        <Title />

        <Content />
      </Wrapper>
    </React.Fragment>
  );
}

export default ResetPasswordPage;
