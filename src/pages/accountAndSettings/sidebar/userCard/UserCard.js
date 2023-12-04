import React from "react";
import styled from "styled-components/macro";

import { CardComp, CardContentComp } from "../../../../components/Card";
import GridComp from "../../../../components/Grid";
import BoxComp from "../../../../components/Box";
import DividerComp from "../../../../components/Divider";

import TitleSection from "./sections/Title";
import ImageSection from "./sections/Image";
import UserOtherInformationsSection from "./sections/UserOtherInformations";

const BoxWrapper = styled(BoxComp)`
  width: 100%;
`;

function UserCard() {
  return (
    <BoxWrapper>
      <CardComp>
        <TitleSection />

        <CardContentComp>
          <GridComp container spacing={1}>
            <GridComp item xs={12}>
              <ImageSection />
            </GridComp>

            <GridComp item xs={12}>
              <DividerComp />
            </GridComp>

            <GridComp item xs={12}>
              <UserOtherInformationsSection />
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>
    </BoxWrapper>
  );
}

export default UserCard;
