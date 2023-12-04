import React from "react";
import styled from "styled-components/macro";

import TypographyComp from "../../components/Typography";
import DividerComp from "../../components/Divider";
import { CardComp, CardContentComp } from "../../components/Card";
import {
  CancelButton,
  DeleteButton,
  SaveButton,
  SendButton,
  SignInButton,
  SignUpButton,
  UpdateButton,
  UploadPhotoButton,
  VerifyButton,
} from "../../components/customizedComp/CustomButtons";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);
const Divider = styled(DividerComp)(spacing);

const ButtonsPage = () => {
  return (
    <>
      <Title />

      <Divider my={6} />

      <Content />
    </>
  );
};

export default ButtonsPage;

const Title = () => {
  return (
    <TypographyComp variant="h3" gutterBottom display="inline">
      routerPageText.buttonsPageTitle
    </TypographyComp>
  );
};

const Content = () => {
  const buttonsWrapperStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    flexWrap: "wrap",
  };

  return (
    <Card>
      <CardContentComp>
        <div style={buttonsWrapperStyle}>
          <SendButton />
          <UpdateButton />
          <SaveButton />
          <DeleteButton />
          <CancelButton />
          <SignInButton />
          <SignUpButton />
          <VerifyButton />
          <UploadPhotoButton />
        </div>
      </CardContentComp>
    </Card>
  );
};
