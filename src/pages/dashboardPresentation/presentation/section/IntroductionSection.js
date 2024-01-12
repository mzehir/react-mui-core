import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { rgba } from "polished";

import TypographyComp from "../../../../components/Typography";
import GridComp from "../../../../components/Grid";

import { Container } from "@mui/material";
import { spacing } from "@mui/system";

const Typography = styled(TypographyComp)(spacing);

const Wrapper = styled.div`
  padding-top: 3.5rem;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

const Content = styled.div`
  padding: ${(props) => props.theme.spacing(6)} 0;
  line-height: 150%;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 6px 18px 0 rgba(18, 38, 63, 0.075);
  border-radius: 5px;
  transform: perspective(2000px) rotateX(25deg);
  z-index: 0;
  position: relative;
  image-rendering: optimizequality;
  image-rendering: -webkit-optimize-contrast;
  margin-bottom: -100px;
  margin-top: -35px;
  ${(props) => props.theme.breakpoints.up("md")} {
    margin-top: -50px;
  }
`;

const ImageWrapper = styled.div`
  &:before {
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.02));
    bottom: 0;
    left: 0;
    position: absolute;
    content: " ";
    z-index: 1;
    display: block;
    width: 100%;
    height: 75px;
    pointer-events: none;
  }
`;

const Title = styled(Typography)`
  opacity: 0.9;
  line-height: 1.4;
  font-size: 1.75rem;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};

  ${(props) => props.theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  span {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const Subtitle = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin: ${(props) => props.theme.spacing(2)} 0;
`;

const TitleTag = styled(TypographyComp)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  background: ${(props) => rgba(props.theme.palette.primary.main, 0.1)};
  box-shadow: 0 1px 1px
    ${(props) => rgba(props.theme.palette.primary.main, 0.25)};
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: ${(props) => props.theme.spacing(3)};
  display: inline-block;
`;

function IntroductionSection() {
  return (
    <Wrapper>
      <Container>
        <GridComp
          container
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          <GridComp item xs={12} sm={9} md={8} lg={8}>
            <Content>
              <TitleTag variant="body2">
                componentsText.dashboardTitleTagText
              </TitleTag>
              <Title variant="h1" gutterBottom>
                componentsText.dashboardTitleText
              </Title>
              <GridComp container justifyContent="center" spacing={4}>
                <GridComp item xs={12} lg={10}>
                  <Subtitle color="textSecondary">
                    componentsText.dashboardTitleDescText
                  </Subtitle>
                </GridComp>
              </GridComp>
            </Content>
          </GridComp>
        </GridComp>
        <GridComp
          container
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          <GridComp item xs={12} sm={10} md={9} lg={9}>
            <ImageWrapper>
              <NavLink to="/dashboard" target="_blank">
                <Image
                  alt="React MUI App"
                  src={`/static/img/screenshots/dashboard-app-image.png`}
                />
              </NavLink>
            </ImageWrapper>
          </GridComp>
        </GridComp>
      </Container>
    </Wrapper>
  );
}

export default IntroductionSection;
