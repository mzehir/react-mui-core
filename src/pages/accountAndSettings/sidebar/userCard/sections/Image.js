import React from "react";
import styled from "styled-components/macro";
import AuthUseContext from "../../../../../hooks/AuthUseContext";

import BoxComp from "../../../../../components/Box";
import { UploadPhotoButton } from "../../../../../components/customizedComp/CustomButtons";
import AvatarComp from "../../../../../components/Avatar";

const Avatar = styled(AvatarComp)`
  display: inline-block;
  height: 64px;
  width: 64px;
`;

const ImageSection = () => {
  const { image } = AuthUseContext();

  return (
    <BoxComp
      id="LeftBox"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar alt="User Photo" src={image} />

      <UploadPhotoButton
        sx={{ marginTop: "10px" }}
        fullWidth={true}
        size="small"
        onChange={(event) => {
          const file = event.target.files[0];
          if (file) {
            console.log(file);
          }
        }}
      />
    </BoxComp>
  );
};

export default ImageSection;
