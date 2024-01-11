import React, { useState } from "react";
import styled from "styled-components/macro";

import TypographyComp from "../../../components/Typography";
import DividerComp from "../../../components/Divider";
import { CardComp, CardContentComp } from "../../../components/Card";
import GridComp from "../../../components/Grid";
import TextFieldComp from "../../../components/TextField";
import FormControlSelectComp from "../../../components/customizedComp/FormControlSelectComp";
import AlertComp from "../../../components/Alert";
import { AlertTitleComp } from "../../../components/AlertMaterial";
import FormControlLabelCheckboxComp from "../../../components/customizedComp/FormControlLabelCheckboxComp";
import ButtonComp from "../../../components/Button";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);
const Divider = styled(DividerComp)(spacing);

const AlertPage = () => {
  return (
    <>
      <Title />

      <Divider my={6} />

      <Content />
    </>
  );
};

export default AlertPage;

const Title = () => {
  return (
    <TypographyComp variant="h3" gutterBottom display="inline">
      routerPageText.coreAlertPageTitle
    </TypographyComp>
  );
};

const Content = () => {
  const colorOptions = [
    { value: "error", label: "Error" },
    { value: "info", label: "Info" },
    { value: "success", label: "Success" },
    { value: "warning", label: "Warning" },
  ];

  const severityOptions = [
    { value: "error", label: "Error" },
    { value: "info", label: "Info" },
    { value: "success", label: "Success" },
    { value: "warning", label: "Warning" },
  ];

  const variantOptions = [
    { value: "filled", label: "Filled" },
    { value: "outlined", label: "Outlined" },
    { value: "standard", label: "Standard" },
  ];

  const [selectedColor, setSelectedColor] = useState("success");
  const [selectedSeverity, setSelectedSeverity] = useState("success");
  const [selectedVariant, setSelectedVariant] = useState("standard");

  const [titleText, setTitleText] = useState("Alert");
  const [contentText, setContentText] = useState(
    "This is an error alert — check it out!"
  );

  const [closeIconVisible, setCloseIconVisible] = useState(false);
  const [customButtonVisible, setCustomButtonVisible] = useState(false);

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
              <AlertComp
                isTranslation={false}
                color={selectedColor}
                severity={selectedSeverity}
                variant={selectedVariant}
                {...(closeIconVisible
                  ? { onClose: () => console.log("Alert onClose event") }
                  : {})}
                {...(customButtonVisible
                  ? {
                      action: (
                        <ButtonComp
                          isTranslation={false}
                          color="inherit"
                          size="small"
                          onClick={() => console.log("Button onClick event")}
                        >
                          UNDO
                        </ButtonComp>
                      ),
                    }
                  : {})}
              >
                <AlertTitleComp isTranslation={false}>
                  {titleText}
                </AlertTitleComp>
                {contentText}
              </AlertComp>
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
                label="componentsText.enterTitleTextForTheAlert"
                labelIsTranslation={true}
                value={titleText}
                onChange={(e) => setTitleText(e.target.value)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <TextFieldComp
                label="componentsText.enterContentTextForTheAlert"
                labelIsTranslation={true}
                value={contentText}
                onChange={(e) => setContentText(e.target.value)}
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
                options={severityOptions}
                label="componentsText.selectASeverity"
                labelId="componentsText.selectASeverity"
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
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
                label="componentsText.showShutdownIcon"
                checked={closeIconVisible}
                onChange={(e) => {
                  if (e.target.checked) setCustomButtonVisible(false);
                  setCloseIconVisible(e.target.checked);
                }}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3} display="flex">
              <FormControlLabelCheckboxComp
                label="componentsText.addCustomButton"
                checked={customButtonVisible}
                onChange={(e) => {
                  if (e.target.checked) setCloseIconVisible(false);
                  setCustomButtonVisible(e.target.checked);
                }}
              />
            </GridComp>
          </GridComp>
        </CardContentComp>
      </Card>
    </>
  );
};
