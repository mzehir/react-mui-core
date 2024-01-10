import React from "react";
import styled from "styled-components";

import { CardComp, CardContentComp } from "../../../components/Card";
import DividerComp from "../../../components/Divider";
import TypographyComp from "../../../components/Typography";
import CustomFilterComp from "../../../components/multibleComp/customFilter/CustomFilter";
import { CUSTOM_FILTER_COMPONENT_KEYS } from "../../../components/multibleComp/customFilter/enum";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);
const Divider = styled(DividerComp)(spacing);

const filterItems = [
  {
    whichFilterComponent: CUSTOM_FILTER_COMPONENT_KEYS.textFieldFilter.key,
    filterGroupKey: "name",
    filterGroupLabel: "Name",
  },
  {
    whichFilterComponent: CUSTOM_FILTER_COMPONENT_KEYS.selectFilter.key,
    filterGroupKey: "gender",
    filterGroupLabel: "Gender",
    options: [
      {
        value: "male",
        label: "Male",
      },
      {
        value: "female",
        label: "Female",
      },
    ],
  },
  {
    whichFilterComponent: CUSTOM_FILTER_COMPONENT_KEYS.selectFilter.key,
    filterGroupKey: "job",
    filterGroupLabel: "Job",
    options: [
      {
        value: "teacher",
        label: "Teacher",
      },
      {
        value: "student",
        label: "Student",
      },
    ],
  },
  {
    whichFilterComponent: CUSTOM_FILTER_COMPONENT_KEYS.checkboxFilter.key,
    filterGroupKey: "morningPerson",
    filterGroupLabel: "Morning Person",
  },
];

const requestByFilter = (filter) => {
  console.log(filter);
};

const CustomFilterPage = () => {
  return (
    <>
      <Title />

      <Divider my={6} />

      <Content />
    </>
  );
};

export default CustomFilterPage;

const Title = () => {
  return (
    <TypographyComp variant="h3" gutterBottom display="inline">
      routerPageText.sidebarCustomFilter
    </TypographyComp>
  );
};

const Content = () => {
  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h3" gutterBottom display="inline">
          componentsText.exampleCustomFilterCompUsageTitleText
        </TypographyComp>

        <Divider my={3} />

        <CustomFilterComp
          filterItems={filterItems}
          requestByFilter={requestByFilter}
        />
      </CardContentComp>
    </Card>
  );
};
