import React from "react";

import Avatar from "@mui/material/Avatar";

const AvatarComp = (props) => {
  const { alt, src, ...other } = props;

  return <Avatar alt={alt} src={src} {...other} />;
};

export default AvatarComp;
