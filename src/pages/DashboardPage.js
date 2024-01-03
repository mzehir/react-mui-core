import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  appNameChange,
  generalAppConfigs,
} from "../redux/actions/generalAppConfigAction";

import { CardComp, CardContentComp } from "../components/Card";
import TextFieldComp from "../components/TextField";
import TypographyComp from "../components/Typography";
import DividerComp from "../components/Divider";
import { Toastify } from "../components/toastify";
import FormControlSelectComp from "../components/customizedComp/FormControlSelectComp";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);
const Divider = styled(DividerComp)(spacing);

export default function DashboardPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <ExampleReduxUsage />
      <ExampleToastUsage />
    </div>
  );
}

const ExampleReduxUsage = () => {
  const appConfigs = useSelector(generalAppConfigs);
  const dispatch = useDispatch();

  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h3" gutterBottom display="inline">
          componentsText.exampleReduxUsageTitleText
        </TypographyComp>

        <Divider my={3} />

        <TextFieldComp
          label="componentsText.appNewName"
          value={appConfigs.appName}
          onChange={(e) => dispatch(appNameChange(e.target.value))}
        ></TextFieldComp>
      </CardContentComp>
    </Card>
  );
};

const ExampleToastUsage = () => {
  const toastType = [
    { label: "info", value: "info" },
    { label: "success", value: "success" },
    { label: "warn", value: "warn" },
    { label: "error", value: "error" },
  ];

  const toastPosition = [
    { label: "top-left", value: "top-left" },
    { label: "top-right", value: "top-right" },
    { label: "top-center", value: "top-center" },
    { label: "bottom-left", value: "bottom-left" },
    { label: "bottom-right", value: "bottom-right" },
    { label: "bottom-center", value: "bottom-center" },
  ];

  const [type, setType] = useState("info");
  const [position, setPosition] = useState("top-left");
  const [text, setText] = useState("Lorem ipsum...");

  const runToast = (type, position, message) => {
    Toastify({
      type: type,
      position: position,
      message: message,
    });
  };

  useEffect(() => {
    runToast(type, position, text);
  }, [type, position, text]);

  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h3" gutterBottom display="inline">
          componentsText.exampleToastUsageTitleText
        </TypographyComp>

        <Divider my={3} />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <FormControlSelectComp
            options={toastType}
            label="componentsText.toastType"
            labelId="componentsText.toastType"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />

          <FormControlSelectComp
            options={toastPosition}
            label="componentsText.toastPosition"
            labelId="componentsText.toastPosition"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />

          <TextFieldComp
            label="componentsText.toastText"
            labelIsTranslation={true}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></TextFieldComp>
        </div>
      </CardContentComp>
    </Card>
  );
};
