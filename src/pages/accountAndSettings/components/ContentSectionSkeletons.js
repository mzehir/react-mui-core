import React from "react";
import styled from "styled-components";

import {
  CardComp,
  CardHeaderComp,
  CardContentComp,
} from "../../../components/Card";
import TypographyComp from "../../../components/Typography";

import { spacing } from "@mui/system";
import GridComp from "../../../components/Grid";

const Card = styled(CardComp)`
  ${spacing};
  width: 100%;
`;

export const CardCompSkeleton = (props) => {
  const { children, ...other } = props;

  return <Card {...other}>{children}</Card>;
};

export const CardHeaderCompSkeleton = (props) => {
  const { label, Icon, ...other } = props;

  return (
    <CardHeaderComp
      title={<TypographyComp variant="h4">{label}</TypographyComp>}
      avatar={<Icon fontSize="large" />}
      {...other}
    />
  );
};

export const CardContentCompSkeleton = (props) => {
  const { children, ...other } = props;

  return <CardContentComp {...other}>{children}</CardContentComp>;
};

export const GridCompContainerSkeleton = (props) => {
  const { children, ...other } = props;

  return (
    <GridComp container {...other}>
      {children}
    </GridComp>
  );
};

export const GridCompItemSkeleton = (props) => {
  const { children, ...other } = props;

  return (
    <GridComp item xs={12} {...other}>
      {children}
    </GridComp>
  );
};
