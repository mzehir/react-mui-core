import React from "react";
import styled from "styled-components/macro";
import LanguageUseContext from "../../../../hooks/LanguageUseContext";

import GridComp from "../../../Grid";
import TypographyComp from "../../../Typography";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80px;
  cursor: pointer;
  font-size: 0.825rem;
  border-radius: 0.3rem;
  border: 1px solid
    ${(props) =>
      !props.active
        ? props.theme.palette.action.selected
        : props.theme.palette.action.active};
`;

const Title = styled(TypographyComp)`
  text-align: center;
`;

export default function LanguageItem({ title, value, children }) {
  const { language, setLanguage } = LanguageUseContext();

  return (
    <GridComp item xs={6}>
      <Button
        active={value === language}
        onClick={() => {
          setLanguage(value);
        }}
      >
        {children}
      </Button>

      <Title variant="subtitle2" gutterBottom>
        {title}
      </Title>
    </GridComp>
  );
}
