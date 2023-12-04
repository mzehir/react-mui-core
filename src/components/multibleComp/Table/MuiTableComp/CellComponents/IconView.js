import React from "react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const IconView = (props) => {
  const { iconKey } = props;

  let iconToDisplay;

  switch (iconKey) {
    case "TrendingDownIcon":
      iconToDisplay = <TrendingDownIcon color="error" />;
      break;
    case "TrendingUpIcon":
      iconToDisplay = <TrendingUpIcon color="success" />;
      break;
    default:
      iconToDisplay = null;
  }

  return <React.Fragment>{iconToDisplay}</React.Fragment>;
};

export default IconView;
