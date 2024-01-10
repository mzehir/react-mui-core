import React, { useState } from "react";
import styled from "styled-components/macro";

import TypographyComp from "../../../components/Typography";
import DividerComp from "../../../components/Divider";
import { CardComp, CardContentComp } from "../../../components/Card";
import GridComp from "../../../components/Grid";
import ForUserSelect from "../../../components/customizedComp/AutocompleteSelectCompCostumize/ForUserSelect";
import FormControlLabelCheckboxComp from "../../../components/customizedComp/FormControlLabelCheckboxComp";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);
const Divider = styled(DividerComp)(spacing);

const AdvancedSelectPage = () => {
  return (
    <>
      <Title />

      <Divider my={6} />

      <Content />
    </>
  );
};

export default AdvancedSelectPage;

const Title = () => {
  return (
    <TypographyComp variant="h3" gutterBottom display="inline">
      routerPageText.advancedSelectPageTitle
    </TypographyComp>
  );
};

const Content = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [userOptions, setUserOptions] = useState(options);

  const [disableCloseOnSelect, setDisableCloseOnSelect] = useState(false);
  const [clearOnEscape, setClearOnEscape] = useState(false);
  const [disableClearable, setDisableClearable] = useState(false);
  const [disableListWrap, setDisableListWrap] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [clearOnBlur, setClearOnBlur] = useState(true);
  const [autoComplete, setAutoComplete] = useState(false);
  const [autoHighlight, setAutoHighlight] = useState(false);
  const [selectOnFocus, setSelectOnFocus] = useState(false);
  const [getOptionDisabled, setGetOptionDisabled] = useState(false);
  const [groupBy, setGroupBy] = useState(false);
  const [customRenderOption, setCustomRenderOption] = useState(false);
  const [addNewItem, setAddNewItem] = useState(false);

  return (
    <Card>
      <CardContentComp>
        <GridComp container spacing={3}>
          <GridComp item xs={12}>
            <ForUserSelect
              options={userOptions}
              setOptions={setUserOptions}
              disableCloseOnSelect={disableCloseOnSelect}
              clearOnEscape={clearOnEscape}
              disableClearable={disableClearable}
              disableListWrap={disableListWrap}
              disabled={disabled}
              clearOnBlur={clearOnBlur}
              autoComplete={autoComplete}
              autoHighlight={autoHighlight}
              selectOnFocus={selectOnFocus}
              getOptionDisabled={getOptionDisabled}
              groupBy={groupBy}
              customRenderOption={customRenderOption}
              addNewItem={addNewItem}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectDisableCloseOnSelectPropDescText"
              checked={disableCloseOnSelect}
              onChange={(e) => {
                setDisableCloseOnSelect(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectClearOnEscapePropDescText"
              checked={clearOnEscape}
              onChange={(e) => {
                setClearOnEscape(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectDisableClearablePropDescText"
              checked={disableClearable}
              onChange={(e) => {
                setDisableClearable(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectDisableListWrapPropDescText"
              checked={disableListWrap}
              onChange={(e) => {
                setDisableListWrap(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectDisabledPropDescText"
              checked={disabled}
              onChange={(e) => {
                setDisabled(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectClearOnBlurPropDescText"
              checked={clearOnBlur}
              onChange={(e) => {
                setClearOnBlur(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectAutoCompletePropDescText"
              checked={autoComplete}
              onChange={(e) => {
                setAutoComplete(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectAutoHighlightPropDescText"
              checked={autoHighlight}
              onChange={(e) => {
                setAutoHighlight(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectSelectOnFocusPropDescText"
              checked={selectOnFocus}
              onChange={(e) => {
                setSelectOnFocus(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectGroupByPropDescText"
              checked={groupBy}
              onChange={(e) => {
                setGroupBy(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectCustomRenderOptionPropDescText"
              checked={customRenderOption}
              onChange={(e) => {
                setCustomRenderOption(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectGetOptionDisabledPropDescText"
              checked={getOptionDisabled}
              onChange={(e) => {
                setGetOptionDisabled(e.target.checked);
              }}
            />
          </GridComp>

          <GridComp item xs={12} md={6} lg={3}>
            <FormControlLabelCheckboxComp
              label="componentsText.autoSelectAddNewItemPropDescText"
              checked={addNewItem}
              onChange={(e) => {
                setAddNewItem(e.target.checked);
              }}
            />
          </GridComp>
        </GridComp>
      </CardContentComp>
    </Card>
  );
};

const options = [
  { person: "Mümin Zehir", phone: "5419525921", id: "001" },
  { person: "Ahmet Faruk Turgut", phone: "5419525922", id: "002" },
  { person: "Ensar Öztürk", phone: "5419525923", id: "003" },
  { person: "Seyit Uy", phone: "5419525924", id: "004" },
  { person: "Ege Sarı", phone: "5419525925", id: "005" },
  { person: "Mustafa Şimşek", phone: "5419525926", id: "006" },
  { person: "Kenan Tunç", phone: "5419525927", id: "007" },
  { person: "Samet Sarı", phone: "5419525928", id: "008" },
  { person: "Salih Kaplan", phone: "541952 5929", id: "009" },
  { person: "Burak Uysal", phone: "541952 5930", id: "010" },
];
