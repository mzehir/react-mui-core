import React, { useState } from "react";
import styled from "styled-components/macro";

import TypographyComp from "../../../components/Typography";
import DividerComp from "../../../components/Divider";
import { CardComp, CardContentComp } from "../../../components/Card";
import ButtonComp from "../../../components/Button";
import GridComp from "../../../components/Grid";
import TextFieldComp from "../../../components/TextField";
import FormControlSelectComp from "../../../components/customizedComp/FormControlSelectComp";
import FormControlLabelCheckboxComp from "../../../components/customizedComp/FormControlLabelCheckboxComp";
import AddIcon from "@mui/icons-material/Add";
import BuildIcon from "@mui/icons-material/Build";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);
const Divider = styled(DividerComp)(spacing);

const ButtonPage = () => {
  return (
    <>
      <Title />

      <Divider my={6} />

      <Content />
    </>
  );
};

export default ButtonPage;

const Title = () => {
  return (
    <TypographyComp variant="h3" gutterBottom display="inline">
      routerPageText.coreButtonPageTitle
    </TypographyComp>
  );
};

const Content = () => {
  const variantOptions = [
    { value: "contained", label: "Contained" },
    { value: "outlined", label: "Outlined" },
    { value: "text", label: "Text" },
  ];

  const sizeOptions = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];

  const colorOptions = [
    { value: "inherit", label: "Inherit" },
    { value: "primary", label: "Primary" },
    { value: "secondary", label: "Secondary" },
    { value: "success", label: "Success" },
    { value: "error", label: "Error" },
    { value: "info", label: "Info" },
    { value: "warning", label: "Warning" },
  ];

  const [text, setText] = useState("Click");
  const [selectedVariant, setSelectedVariant] = useState("outlined");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedColor, setSelectedColor] = useState("success");
  const [disabled, setDisabled] = useState(false);
  const [startIconOpen, setStartIconOpen] = useState(false);
  const [endIconOpen, setEndIconOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);

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
              <ButtonComp
                isTranslation={false}
                variant={selectedVariant}
                size={selectedSize}
                color={selectedColor}
                disabled={disabled}
                fullWidth={fullWidth}
                {...(startIconOpen ? { startIcon: <BuildIcon /> } : {})}
                {...(endIconOpen ? { endIcon: <AddIcon /> } : {})}
              >
                {text}
              </ButtonComp>
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
                label="componentsText.enterTextForTheButton"
                labelIsTranslation={true}
                value={text}
                onChange={(e) => setText(e.target.value)}
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

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlSelectComp
                options={sizeOptions}
                label="componentsText.selectASize"
                labelId="componentsText.selectASize"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
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
              <FormControlLabelCheckboxComp
                label="componentsText.disableTheButton"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlLabelCheckboxComp
                label="componentsText.addIconToButtonStart"
                checked={startIconOpen}
                onChange={(e) => setStartIconOpen(e.target.checked)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlLabelCheckboxComp
                label="componentsText.addIconToEndOfButton"
                checked={endIconOpen}
                onChange={(e) => setEndIconOpen(e.target.checked)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlLabelCheckboxComp
                label="componentsText.buttonMaxWidth"
                checked={fullWidth}
                onChange={(e) => setFullWidth(e.target.checked)}
              />
            </GridComp>
          </GridComp>
        </CardContentComp>
      </Card>
    </>
  );
};
