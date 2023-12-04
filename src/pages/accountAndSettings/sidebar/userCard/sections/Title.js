import React from "react";
import { CardHeaderCompSkeleton } from "../../../components/ContentSectionSkeletons";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const TitleSection = () => {
  return (
    <CardHeaderCompSkeleton
      label="belongingToTheProject.userCard"
      Icon={AccountBoxIcon}
    />
  );
};

export default TitleSection;
