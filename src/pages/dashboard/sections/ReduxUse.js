import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  appNameChange,
  generalAppConfigs,
} from "../../../redux/actions/generalAppConfigAction";

import { CardComp, CardContentComp } from "../../../components/Card";
import DividerComp from "../../../components/Divider";
import TypographyComp from "../../../components/Typography";
import TextFieldComp from "../../../components/TextField";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);
const Divider = styled(DividerComp)(spacing);

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

export default ExampleReduxUsage;
