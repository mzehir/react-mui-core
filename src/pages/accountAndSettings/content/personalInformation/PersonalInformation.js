import React from "react";

import {
  CardCompSkeleton,
  CardContentCompSkeleton,
  CardHeaderCompSkeleton,
  GridCompContainerSkeleton,
} from "../../components/ContentSectionSkeletons";

const PersonalInformation = ({ item }) => {
  return (
    <CardCompSkeleton>
      <CardHeaderCompSkeleton label={item.label} Icon={item.icon} />

      <CardContentCompSkeleton>
        <GridCompContainerSkeleton>{/* Satırlar */}</GridCompContainerSkeleton>
      </CardContentCompSkeleton>
    </CardCompSkeleton>
  );
};

export default PersonalInformation;
