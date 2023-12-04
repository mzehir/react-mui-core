import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

import LanguageItem from "./LanguageItem";
import BoxComp from "../../../Box";
import AlertComp from "../../../Alert";
import GridComp from "../../../Grid";
import { LANGUAGES } from "../../../../utils/constants/languageConstant";

export default function LanguageSettings() {
  const [languageItems] = useState([
    {
      value: LANGUAGES.EN.key,
      text: LANGUAGES.EN.text,
      flagFields: {
        countryCode: "US",
        tooltipText: "US",
        flagStyle: {
          width: "7em",
          height: "7em",
        },
      },
    },
    {
      value: LANGUAGES.TR.key,
      text: LANGUAGES.TR.text,
      flagFields: {
        countryCode: "TR",
        tooltipText: "TR",
        flagStyle: {
          width: "7em",
          height: "7em",
        },
      },
    },
  ]);
  return (
    <React.Fragment>
      <BoxComp px={4} my={3}>
        <AlertComp icon={false} severity="info">
          componentsText.languageSettingsTitle
        </AlertComp>
      </BoxComp>

      <BoxComp px={4} my={3}>
        <GridComp container spacing={3}>
          {languageItems.map((item, index) => (
            <LanguageItem key={index} title={item.text} value={item.value}>
              <ReactCountryFlag
                countryCode={item.flagFields.countryCode}
                style={item.flagFields.flagStyle}
                title={item.flagFields.tooltipText}
                svg
              />
            </LanguageItem>
          ))}
        </GridComp>
      </BoxComp>
    </React.Fragment>
  );
}
