import React from "react";
import styled from "styled-components/macro";

import TypographyComp from "../../../components/Typography";
import DividerComp from "../../../components/Divider";
import { CardComp, CardContentComp } from "../../../components/Card";
import {
  ErrorAlert,
  InfoAlert,
  SuccessAlert,
  WarningAlert,
} from "../../../components/customizedComp/CustomAlerts";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);
const Divider = styled(DividerComp)(spacing);

const AlertsPage = () => {
  return (
    <>
      <Title />

      <Divider my={6} />

      <Content />
    </>
  );
};

export default AlertsPage;

const Title = () => {
  return (
    <TypographyComp variant="h3" gutterBottom display="inline">
      routerPageText.alertsPageTitle
    </TypographyComp>
  );
};

const Content = () => {
  const buttonsWrapperStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    flexWrap: "wrap",
  };

  return (
    <Card>
      <CardContentComp>
        <div style={buttonsWrapperStyle}>
          <SuccessAlert />
          <InfoAlert />
          <WarningAlert />
          <ErrorAlert />
        </div>
      </CardContentComp>
    </Card>
  );
};
