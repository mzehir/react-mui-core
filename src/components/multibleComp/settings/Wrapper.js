import React from "react";
import styled from "styled-components/macro";

import ThemeSettings from "./theme/ThemeSettings";
import LanguageSettings from "./language/LanguageSettings";
import DividerComp from "../../Divider";
import ChipComp from "../../Chip";

const WrapperElement = styled.div`
  width: 258px;
  overflow-x: hidden;
  margin-top: 10px;
`;

export default function Wrapper() {
  return (
    <WrapperElement>
      <DividerComp>
        <ChipComp label="componentsText.theme" />
      </DividerComp>
      <ThemeSettings />

      <DividerComp>
        <ChipComp label="componentsText.language" />
      </DividerComp>
      <LanguageSettings />
    </WrapperElement>
  );
}
