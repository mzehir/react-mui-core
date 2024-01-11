import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { CardComp, CardContentComp } from "../../../components/Card";
import DividerComp from "../../../components/Divider";
import TypographyComp from "../../../components/Typography";
import FormControlLabelCheckboxComp from "../../../components/customizedComp/FormControlLabelCheckboxComp";
import FormControlSelectComp from "../../../components/customizedComp/FormControlSelectComp";
import TextFieldComp from "../../../components/TextField";
import GridComp from "../../../components/Grid";
import { Toastify } from "../../../components/toastify/toastify";
import {
  DEFAULT_SETTINGS,
  toastPositionPrepareArr,
  toastThemePrepareArr,
  toastTypePrepareArr,
} from "../../../components/toastify/settings/generalSettings";
import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);
const Divider = styled(DividerComp)(spacing);

const runToast = (type, position, theme, message) => {
  Toastify({
    type: type,
    position: position,
    theme: theme,
    message: message,
  });
};

const ReactToastifyPage = () => {
  return (
    <>
      <Title />

      <Divider my={6} />

      <Content />
    </>
  );
};

export default ReactToastifyPage;

const Title = () => {
  return (
    <TypographyComp variant="h3" gutterBottom display="inline">
      routerPageText.sidebarReactToastify
    </TypographyComp>
  );
};

const Content = () => {
  const toastType = toastTypePrepareArr();
  const toastPosition = toastPositionPrepareArr();
  const toastTheme = toastThemePrepareArr();

  const [toastActive, setToastActive] = useState(false);
  const [type, setType] = useState(DEFAULT_SETTINGS.type.value);
  const [position, setPosition] = useState(DEFAULT_SETTINGS.position.value);
  const [theme, setTheme] = useState(DEFAULT_SETTINGS.theme.value);
  const [text, setText] = useState(DEFAULT_SETTINGS.message.EN);

  useEffect(() => {
    if (toastActive) {
      runToast(type, position, theme, text);
    }
  }, [toastActive, type, position, theme, text]);

  return (
    <Card>
      <CardContentComp>
        <GridComp container spacing={5}>
          <GridComp item xs={12}>
            <FormControlLabelCheckboxComp
              label="componentsText.reactToastifyActivePassive"
              value={toastActive}
              onChange={(e) => setToastActive(e.target.checked)}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlSelectComp
              options={toastType}
              label="componentsText.toastType"
              labelId="componentsText.toastType"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </GridComp>
          <GridComp item xs={12} md={6} lg={3}>
            <FormControlSelectComp
              options={toastPosition}
              label="componentsText.toastPosition"
              labelId="componentsText.toastPosition"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </GridComp>
          <GridComp item xs={12} md={6} lg={3}>
            <FormControlSelectComp
              options={toastTheme}
              label="componentsText.toastTheme"
              labelId="componentsText.toastTheme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
          </GridComp>
          <GridComp item xs={12} md={6} lg={3}>
            <TextFieldComp
              label="componentsText.toastText"
              labelIsTranslation={true}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </GridComp>
        </GridComp>
      </CardContentComp>
    </Card>
  );
};
