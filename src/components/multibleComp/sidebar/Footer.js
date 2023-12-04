import React from "react";
import AuthUseContext from "../../../hooks/AuthUseContext";
import styled from "styled-components/macro";

import GridComp from "../../Grid";
import AvatarComp from "../../Avatar";
import TypographyComp from "../../Typography";

import { Badge } from "@mui/material";

const FooterWrapper = styled.div`
  background-color: ${(props) =>
    props.theme.sidebar.footer.background} !important;
  padding: ${(props) => props.theme.spacing(2.75)}
    ${(props) => props.theme.spacing(4)};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const FooterText = styled(TypographyComp)`
  color: ${(props) => props.theme.sidebar.footer.color};
`;

const FooterBadge = styled(Badge)`
  margin-right: ${(props) => props.theme.spacing(1)};
  span {
    background-color: ${(props) =>
      props.theme.sidebar.footer.online.background};
    border: 1.5px solid ${(props) => props.theme.palette.common.white};
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;

const Footer = ({ ...rest }) => {
  const { name, surname, image } = AuthUseContext();

  function footerTextPrepare({ name, surname }) {
    if (name) {
      let resultText = name;
      if (surname) {
        resultText = resultText + " " + surname;
      }
      return resultText;
    } else {
      return "componentsText.guest";
    }
  }

  return (
    <FooterWrapper {...rest}>
      <GridComp container spacing={2}>
        <GridComp item>
          <FooterBadge
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            <AvatarComp alt="User Photo" src={image} />
          </FooterBadge>
        </GridComp>

        <GridComp item>
          <FooterText variant="body2">
            {footerTextPrepare({ name: name, surname: surname })}
          </FooterText>
        </GridComp>
      </GridComp>
    </FooterWrapper>
  );
};

export default Footer;
