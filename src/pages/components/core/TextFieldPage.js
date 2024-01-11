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

const TextFieldPage = () => {
  return (
    <>
      <Title />

      <Divider my={6} />

      <Content />
    </>
  );
};

export default TextFieldPage;

const Title = () => {
  return (
    <TypographyComp variant="h3" gutterBottom display="inline">
      routerPageText.coreTextFieldPageTitle
    </TypographyComp>
  );
};

const Content = () => {
  const colorOptions = [
    { value: "primary", label: "Primary" },
    { value: "secondary", label: "Secondary" },
    { value: "error", label: "Error" },
    { value: "info", label: "Info" },
    { value: "success", label: "Success" },
    { value: "warning", label: "Warning" },
  ];

  const sizeOptions = [
    { value: "medium", label: "Medium" },
    { value: "small", label: "Small" },
  ];

  const variantOptions = [
    { value: "filled", label: "Filled" },
    { value: "outlined", label: "Outlined" },
    { value: "standard", label: "Standard" },
  ];

  const [selectedColor, setSelectedColor] = useState("primary");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedVariant, setSelectedVariant] = useState("outlined");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  const [required, setRequired] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [text, setText] = useState("Lorem Ipsum");
  const [typeOpen, setTypeOpen] = useState(false);
  const [type, setType] = useState("string");

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
              <TextFieldComp
                focused
                label="componentsText.enterText"
                value={text}
                onChange={(e) => setText(e.target.value)}
                color={selectedColor}
                size={selectedSize}
                variant={selectedVariant}
                disabled={disabled}
                error={error}
                required={required}
                fullWidth={fullWidth}
                type={type}
                {...(readOnly
                  ? {
                      InputProps: {
                        readOnly: true,
                      },
                    }
                  : {})}
              />
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

          <GridComp container spacing={3}>
            <GridComp item xs={12} md={6} lg={3}>
              <FormControlSelectComp
                options={variantOptions}
                label="componentsText.selectAVariant"
                labelId="componentsText.selectAVariant"
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlSelectComp
                options={colorOptions}
                label="componentsText.selectAColor"
                labelId="componentsText.selectAColor"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlSelectComp
                options={sizeOptions}
                label="componentsText.selectASize"
                labelId="componentsText.selectASize"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3} display="flex">
              <FormControlLabelCheckboxComp
                label="componentsText.disableOpen"
                checked={disabled}
                onChange={(e) => {
                  setDisabled(e.target.checked);
                }}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3} display="flex">
              <FormControlLabelCheckboxComp
                label="componentsText.errorOpen"
                checked={error}
                onChange={(e) => {
                  setError(e.target.checked);
                }}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3} display="flex">
              <FormControlLabelCheckboxComp
                label="componentsText.maxWidthOpen"
                checked={fullWidth}
                onChange={(e) => {
                  setFullWidth(e.target.checked);
                }}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3} display="flex">
              <FormControlLabelCheckboxComp
                label="componentsText.requiredFeatureOpen"
                checked={required}
                onChange={(e) => {
                  setRequired(e.target.checked);
                }}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3} display="flex">
              <FormControlLabelCheckboxComp
                label="componentsText.readOnlyFeatureOn"
                checked={readOnly}
                onChange={(e) => {
                  setReadOnly(e.target.checked);
                }}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3} display="flex">
              <FormControlLabelCheckboxComp
                label="componentsText.passwordWriteAreaActive"
                checked={typeOpen}
                onChange={(e) => {
                  setTypeOpen(e.target.checked);
                  if (e.target.checked) {
                    setType("password");
                  } else {
                    setType("string");
                  }
                }}
              />
            </GridComp>
          </GridComp>
        </CardContentComp>
      </Card>
    </>
  );
};
