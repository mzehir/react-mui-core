import React from "react";
import styled from "styled-components/macro";

import LogoSection from "./sections/Logo";
import Title from "./sections/Title";
import Content from "./sections/Content";
import Footer from "./sections/Footer";
import PaperComp from "../../components/Paper";

const Wrapper = styled(PaperComp)`
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

function SignInPage() {
  return (
    <React.Fragment>
      <LogoSection />

      <Wrapper>
        <Title />

        <Content />

        <br />

        <Footer />
      </Wrapper>
    </React.Fragment>
  );
}

export default SignInPage;
