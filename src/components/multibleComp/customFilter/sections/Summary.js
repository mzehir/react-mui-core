import React, { useState, useEffect } from "react";
import styled from "styled-components";

import AccordionSummaryComp from "../../../AccordionSummary";
import BoxComp from "../../../Box";
import ChipComp from "../../../Chip";
import TypographyComp from "../../../Typography";
import {
  CleanTheFiltersButton,
  FilterButton,
} from "../../../customizedComp/CustomButtons";

import FilterListIcon from "@mui/icons-material/FilterList";
import ClearIcon from "@mui/icons-material/Clear";

const CustomAccordionSummaryComp = styled(AccordionSummaryComp)`
  & .MuiAccordionSummary-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ChipWrapperBox = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const ButtonWrapperBox = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  justify-content: end;
  flex-wrap: wrap;
  gap: 10px;
`;

const SummarySection = ({
  selectedFilterItems,
  requestByFilter,
  selectedFilterItemsDelete,
  selectedFilterItemDelete,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CustomAccordionSummaryComp>
      <ChipWrapperBox>
        {selectedFilterItems.length === 0 ? (
          <TypographyComp variant="h5">
            componentsText.noFilterSelected
          </TypographyComp>
        ) : (
          selectedFilterItems.map((item, index) => (
            <ChipComp
              key={index.toString()}
              label={`${item.filterGroupLabel}: ${item.label}`}
              isTranslation={false}
              onDelete={() => selectedFilterItemDelete(item)}
            />
          ))
        )}
      </ChipWrapperBox>

      <ButtonWrapperBox>
        {windowWidth < 750 ? (
          <ClearIcon
            color="error"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              selectedFilterItemsDelete();
            }}
          />
        ) : (
          <CleanTheFiltersButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              selectedFilterItemsDelete();
            }}
          />
        )}

        {windowWidth < 750 ? (
          <FilterListIcon
            color="success"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              requestByFilter(selectedFilterItems);
            }}
          />
        ) : (
          <FilterButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              requestByFilter(selectedFilterItems);
            }}
          />
        )}
      </ButtonWrapperBox>
    </CustomAccordionSummaryComp>
  );
};

export default SummarySection;
