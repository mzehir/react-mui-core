import React, { useState } from "react";

import AccordionComp from "../../Accordion";
import DetailSection from "./sections/Detail";
import SummarySection from "./sections/Summary";
import { CUSTOM_FILTER_COMPONENT_KEYS } from "./enum";

export default function CustomFilterComp({ filterItems, requestByFilter }) {
  const [selectedFilterItems, setSelectedFilterItems] = useState([]);

  const changeForFilterElements = (data) => {
    let _selectedFilterItems = [...selectedFilterItems];

    const index = _selectedFilterItems.findIndex(
      (item) => item.filterGroupKey === data.filterGroupKey
    );

    if (
      data.component == CUSTOM_FILTER_COMPONENT_KEYS.checkboxFilter.key &&
      !data.value
    ) {
      _selectedFilterItems = _selectedFilterItems.filter(
        (o) => o.filterGroupKey !== data.filterGroupKey
      );
    } else if (index !== -1) {
      delete data.component;
      _selectedFilterItems[index] = data;
    } else {
      delete data.component;
      _selectedFilterItems.push(data);
    }

    setSelectedFilterItems(_selectedFilterItems);
  };

  return (
    <AccordionComp>
      <SummarySection
        selectedFilterItems={selectedFilterItems}
        requestByFilter={requestByFilter}
        selectedFilterItemsDelete={() => {
          console.log(selectedFilterItems);
          setSelectedFilterItems([]);
        }}
        selectedFilterItemDelete={(item) => {
          let oldSelectedFilterItems = selectedFilterItems;
          let actualSelectedFilterItems = oldSelectedFilterItems.filter(
            (o) => o.filterGroupKey !== item.filterGroupKey
          );
          setSelectedFilterItems(actualSelectedFilterItems);
        }}
      />
      <DetailSection
        filterItems={filterItems}
        selectedFilterItems={selectedFilterItems}
        changeForFilterElements={changeForFilterElements}
      />
    </AccordionComp>
  );
}
