import React from "react";
import styled from "styled-components/macro";

import BoxComp from "../../../../components/Box";
import TypographyComp from "../../../../components/Typography";
import TooltipComp from "../../../../components/Tooltip";

import { Container } from "@mui/material";
import { spacing } from "@mui/system";

const Wrapper = styled.div`
  ${spacing};
  text-align: center;
`;

const TypographyOverline = styled(TypographyComp)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const BrandIcon = styled.img`
  vertical-align: middle;
  height: auto;
`;

const Brand = styled.div`
  background: white;
  display: inline-block;
  padding: 12px 16px;
  border-radius: 10px;
  margin: 10px;
`;

function Integrations() {
  return (
    <Wrapper py={20}>
      <Container>
        <TypographyOverline variant="body2" gutterBottom>
          componentsText.integrations
        </TypographyOverline>

        <BoxComp my={7}>
          <TooltipComp title="Material-UI v5">
            <Brand>
              <BrandIcon
                alt="Material-UI"
                src="/static/img/brands/material-ui.svg"
                style={{ height: "34px", margin: "3px 0" }}
              />
            </Brand>
          </TooltipComp>
          <TooltipComp title="React v17">
            <Brand>
              <BrandIcon
                alt="React"
                src="/static/img/brands/react.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </TooltipComp>
          <TooltipComp title="Redux">
            <Brand>
              <BrandIcon
                alt="Redux"
                src="/static/img/brands/redux.svg"
                style={{ height: "36px", margin: "2px 0" }}
              />
            </Brand>
          </TooltipComp>
          <TooltipComp title="React Router v6">
            <Brand>
              <BrandIcon
                alt="React Router v6"
                src="/static/img/brands/react-router.svg"
                style={{ height: "34px", margin: "3px 0" }}
              />
            </Brand>
          </TooltipComp>
          <TooltipComp title="Firebase">
            <Brand>
              <BrandIcon
                alt="Firebase"
                src="/static/img/brands/firebase.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </TooltipComp>
          <TooltipComp title="ESLint">
            <Brand>
              <BrandIcon
                alt="eslint "
                src="/static/img/brands/eslint.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </TooltipComp>
        </BoxComp>
      </Container>
    </Wrapper>
  );
}

export default Integrations;
