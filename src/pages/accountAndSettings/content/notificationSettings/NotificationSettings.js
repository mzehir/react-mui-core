import React from "react";

import {
  CardCompSkeleton,
  CardContentCompSkeleton,
  CardHeaderCompSkeleton,
  GridCompContainerSkeleton,
} from "../../components/ContentSectionSkeletons";

const NotificationSettings = ({ item }) => {
  return (
    <CardCompSkeleton>
      <CardHeaderCompSkeleton label={item.label} Icon={item.icon} />

      <CardContentCompSkeleton>
        <GridCompContainerSkeleton spacing={3}>
          {/* Satırlar */}
        </GridCompContainerSkeleton>
      </CardContentCompSkeleton>
    </CardCompSkeleton>
  );
};

export default NotificationSettings;
