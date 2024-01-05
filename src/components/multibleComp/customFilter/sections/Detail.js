import React, { useState } from "react";
import AccordionDetailsComp from "../../../AccordionDetails";
import GridComp from "../../../Grid";
import FormControlSelectComp from "../../../customizedComp/FormControlSelectComp";
import FormControlLabelCheckboxComp from "../../../customizedComp/FormControlLabelCheckboxComp";
import TextFieldComp from "../../../TextField";
import { CUSTOM_FILTER_COMPONENT_KEYS } from "../enum";

const DetailSection = ({
  filterItems,
  selectedFilterItems,
  changeForFilterElements,
}) => {
  return (
    <AccordionDetailsComp>
      <GridComp container spacing={5} alignItems={"center"}>
        {filterItems.map((item, index) => {
          return (
            <React.Fragment key={index.toString()}>
              {item.whichFilterComponent ===
                CUSTOM_FILTER_COMPONENT_KEYS.checkboxFilter.key && (
                <GridComp item xs={12} md={6} lg={3}>
                  <FormControlLabelCheckboxComp
                    label={item.filterGroupLabel}
                    checked={
                      selectedFilterItems.find(
                        (o) => o.filterGroupKey === item.filterGroupKey
                      )?.value || false
                    }
                    onChange={(e) => {
                      let resultData = {
                        component: item.whichFilterComponent,
                        filterGroupKey: item.filterGroupKey,
                        filterGroupLabel: item.filterGroupLabel,
                        value: e.target.checked,
                        label: "Open",
                      };

                      changeForFilterElements(resultData);
                    }}
                  />
                </GridComp>
              )}

              {item.whichFilterComponent ===
                CUSTOM_FILTER_COMPONENT_KEYS.textFieldFilter.key && (
                <GridComp item xs={12} md={6} lg={3}>
                  <TextFieldComp
                    label={item.filterGroupLabel}
                    labelIsTranslation={true}
                    value={
                      selectedFilterItems.find(
                        (o) => o.filterGroupKey === item.filterGroupKey
                      )?.value || ""
                    }
                    onChange={(e) => {
                      let resultData = {
                        component: item.whichFilterComponent,
                        filterGroupKey: item.filterGroupKey,
                        filterGroupLabel: item.filterGroupLabel,
                        value: e.target.value,
                        label: e.target.value,
                      };

                      changeForFilterElements(resultData);
                    }}
                  />
                </GridComp>
              )}

              {item.whichFilterComponent ===
                CUSTOM_FILTER_COMPONENT_KEYS.selectFilter.key && (
                <GridComp item xs={12} md={6} lg={3}>
                  <FormControlSelectComp
                    options={item.options}
                    label={item.filterGroupLabel}
                    labelId={item.filterGroupLabel}
                    value={
                      selectedFilterItems.find(
                        (o) => o.filterGroupKey === item.filterGroupKey
                      )?.value || ""
                    }
                    onChange={(e) => {
                      const { value, label } = item.options.find(
                        (option) => option.value === e.target.value
                      );

                      let resultData = {
                        component: item.whichFilterComponent,
                        filterGroupKey: item.filterGroupKey,
                        filterGroupLabel: item.filterGroupLabel,
                        value: value,
                        label: label,
                      };

                      changeForFilterElements(resultData);
                    }}
                  />
                </GridComp>
              )}
            </React.Fragment>
          );
        })}
      </GridComp>
    </AccordionDetailsComp>
  );
};

export default DetailSection;
