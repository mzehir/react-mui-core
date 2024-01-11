import React, { useState } from "react";
import styled from "styled-components/macro";

import TypographyComp from "../../../components/Typography";
import DividerComp from "../../../components/Divider";
import { CardComp, CardContentComp } from "../../../components/Card";
import GridComp from "../../../components/Grid";
import TextFieldComp from "../../../components/TextField";
import FormControlSelectComp from "../../../components/customizedComp/FormControlSelectComp";
import FormControlLabelCheckboxComp from "../../../components/customizedComp/FormControlLabelCheckboxComp";
import SnackbarComp from "../../../components/Snackbar";
import SlideComp from "../../../components/Slide";

import { spacing } from "@mui/system";
import { Alert } from "@mui/material";

const Card = styled(CardComp)(spacing);
const Divider = styled(DividerComp)(spacing);

const SnackbarPage = () => {
  return (
    <>
      <Title />

      <Divider my={6} />

      <Content />
    </>
  );
};

export default SnackbarPage;

const Title = () => {
  return (
    <TypographyComp variant="h3" gutterBottom display="inline">
      routerPageText.coreSnackbarPageTitle
    </TypographyComp>
  );
};

const Content = () => {
  const verticalOptions = [
    { value: "top", label: "Top" },
    { value: "bottom", label: "Bottom" },
  ];

  const horizontalOptions = [
    { value: "left", label: "Left" },
    { value: "right", label: "Right" },
    { value: "center", label: "Center" },
  ];

  const slideOptions = [
    { value: "", label: "Null" },
    { value: "left", label: "Left" },
    { value: "up", label: "Up" },
    { value: "right", label: "Right" },
    { value: "down", label: "Down" },
  ];

  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  );
  const [selectedVertical, setSelectedVertical] = useState("bottom");
  const [selectedHorizontal, setSelectedHorizontal] = useState("left");
  const [selectedSlide, setSelectedSlide] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
              <FormControlLabelCheckboxComp
                label="componentsText.snackbarOpen"
                checked={open}
                onChange={(e) => setOpen(e.target.checked)}
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

          <GridComp container spacing={5}>
            <GridComp item xs={12} md={6} lg={3}>
              <TextFieldComp
                label="componentsText.enterTextForTheSnackbar"
                labelIsTranslation={true}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  setOpen(true);
                }}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlSelectComp
                options={verticalOptions}
                label="componentsText.selectAVerticalDirection"
                labelId="componentsText.selectAVerticalDirection"
                value={selectedVertical}
                onChange={(e) => {
                  setOpen(true);
                  setSelectedVertical(e.target.value);
                }}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlSelectComp
                options={horizontalOptions}
                label="componentsText.selectAHorizontalDirection"
                labelId="componentsText.selectAHorizontalDirection"
                value={selectedHorizontal}
                onChange={(e) => {
                  setOpen(true);
                  setSelectedHorizontal(e.target.value);
                }}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlSelectComp
                options={slideOptions}
                label="componentsText.selectASlide"
                labelId="componentsText.selectASlide"
                value={selectedSlide}
                onChange={(e) => {
                  setOpen(true);
                  setSelectedSlide(e.target.value);
                }}
              />
            </GridComp>
          </GridComp>
        </CardContentComp>
      </Card>

      <SnackbarComp
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: selectedVertical,
          horizontal: selectedHorizontal,
        }}
        {...(selectedSlide
          ? {
              TransitionComponent: (props) => (
                <SlideComp {...props} direction={selectedSlide} />
              ),
            }
          : {})}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {text}
        </Alert>
      </SnackbarComp>
    </>
  );
};
