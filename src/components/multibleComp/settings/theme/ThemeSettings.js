import React from "react";

import ThemeItem from "./ThemeItem";
import BoxComp from "../../../Box";
import AlertComp from "../../../Alert";
import GridComp from "../../../Grid";
import { THEMES } from "../../../../utils/constants/themeConstant";

export default function ThemeSettings() {
  return (
    <React.Fragment>
      <BoxComp px={4} my={3}>
        <AlertComp icon={false} severity="info">
          componentsText.themeSettingsTitle
        </AlertComp>
      </BoxComp>

      <BoxComp px={4} my={3}>
        <GridComp container spacing={3}>
          <ThemeItem
            title="componentsText.dark"
            themeVariant={THEMES.DARK.key}
          />
          <ThemeItem
            title="componentsText.default"
            themeVariant={THEMES.DEFAULT.key}
          />
        </GridComp>
      </BoxComp>
    </React.Fragment>
  );
}
