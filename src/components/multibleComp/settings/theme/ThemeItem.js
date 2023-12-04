import React from "react";
import styled, { css } from "styled-components/macro";
import ThemeUseContext from "../../../../hooks/ThemeUseContext";

import GridComp from "../../../Grid";
import TypographyComp from "../../../Typography";
import { THEMES } from "../../../../utils/constants/themeConstant";

import { grey } from "@mui/material/colors";

const Button = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.palette.background.paper};
  height: 80px;
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.825rem;
  position: relative;
  border: 1px solid
    ${(props) =>
      !props.active
        ? props.theme.palette.action.selected
        : props.theme.palette.action.active};
`;

const ButtonInner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 0 1px ${(props) => props.theme.palette.action.selected};
  position: relative;

  ${(props) =>
    props.selectedTheme === THEMES.DEFAULT.key &&
    css`
      background: linear-gradient(-45deg, #23303f 50%, ${grey[100]} 0);
    `}
  ${(props) =>
    props.selectedTheme === THEMES.DARK.key &&
    css`
      background: #23303f;
    `}
`;

const Title = styled(TypographyComp)`
  text-align: center;
`;

export default function ThemeItem({ title, themeVariant }) {
  const { theme, setTheme } = ThemeUseContext();

  return (
    <GridComp item xs={6}>
      <Button
        active={themeVariant === theme}
        onClick={() => setTheme(themeVariant)}
      >
        <ButtonInner selectedTheme={themeVariant} />
      </Button>
      <Title variant="subtitle2" gutterBottom>
        {title}
      </Title>
    </GridComp>
  );
}
