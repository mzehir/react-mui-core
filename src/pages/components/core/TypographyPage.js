import React, { useState } from "react";
import styled from "styled-components/macro";

import TypographyComp from "../../../components/Typography";
import DividerComp from "../../../components/Divider";
import { CardComp, CardContentComp } from "../../../components/Card";
import GridComp from "../../../components/Grid";
import TextFieldComp from "../../../components/TextField";
import FormControlSelectComp from "../../../components/customizedComp/FormControlSelectComp";
import FormControlLabelCheckboxComp from "../../../components/customizedComp/FormControlLabelCheckboxComp";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);
const Divider = styled(DividerComp)(spacing);

const TypographyPage = () => {
  return (
    <>
      <Title />

      <Divider my={6} />

      <Content />
    </>
  );
};

export default TypographyPage;

const Title = () => {
  return (
    <TypographyComp variant="h3" gutterBottom display="inline">
      routerPageText.coreTypographyPageTitle
    </TypographyComp>
  );
};

const Content = () => {
  const alignOptions = [
    { value: "center", label: "Center" },
    { value: "inherit", label: "Inherit" },
    { value: "justify", label: "Justify" },
    { value: "left", label: "Left" },
    { value: "right", label: "Right" },
  ];

  const variantOptions = [
    { value: "body1", label: "Body 1" },
    { value: "body2", label: "Body 2" },
    { value: "button", label: "Button" },
    { value: "caption", label: "Caption" },
    { value: "h1", label: "h1" },
    { value: "h2", label: "h2" },
    { value: "h3", label: "h3" },
    { value: "h4", label: "h4" },
    { value: "h5", label: "h5" },
    { value: "h6", label: "h6" },
    { value: "inherit", label: "Inherit" },
    { value: "overline", label: "Overline" },
    { value: "subtitle1", label: "Subtitle 1" },
    { value: "subtitle2", label: "Subtitle 2" },
  ];

  const [selectedAlign, setSelectedAlign] = useState("center");
  const [selectedVariant, setSelectedVariant] = useState("h2");
  const [text, setText] = useState("Lorem Ipsum is simply dummy text of...");
  const [noWrap, setNoWrap] = useState(false);

  return (
    <>
      <Card>
        <CardContentComp>
          <TypographyComp
            variant="h5"
            gutterBottom
            style={{ textAlign: "center" }}
          >
            componentsText.observeComponent
          </TypographyComp>

          <Divider my={3} />

          <GridComp container spacing={3}>
            <GridComp item xs={12}>
              <TypographyComp
                align={selectedAlign}
                variant={selectedVariant}
                noWrap={noWrap}
              >
                {text}
              </TypographyComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </Card>

      <br />
      <br />

      <Card>
        <CardContentComp>
          <TypographyComp
            variant="h5"
            gutterBottom
            style={{ textAlign: "center" }}
          >
            componentsText.customizeComponent
          </TypographyComp>

          <Divider my={3} />

          <GridComp container spacing={5}>
            <GridComp item xs={12} md={6} lg={3}>
              <TextFieldComp
                label="componentsText.enterTitleTextForTheTypography"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlSelectComp
                options={alignOptions}
                label="componentsText.selectAnAlignment"
                labelId="componentsText.selectAnAlignment"
                value={selectedAlign}
                onChange={(e) => setSelectedAlign(e.target.value)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlSelectComp
                options={variantOptions}
                label="componentsText.selectAVariant"
                labelId="componentsText.selectAVariant"
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3} display="flex">
              <FormControlLabelCheckboxComp
                label="componentsText.noWrap"
                checked={noWrap}
                onChange={(e) => {
                  setNoWrap(e.target.checked);
                }}
              />
            </GridComp>
          </GridComp>
        </CardContentComp>
      </Card>
    </>
  );
};
