import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import GridComp from "../../../components/Grid";
import LinkComp from "../../../components/Link";

import { ROUTER } from "../../../utils/constants/routerConstant";

const Link = styled(LinkComp)`
  cursor: pointer;
`;

function Footer() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <GridComp container>
        <GridComp item xs={6}>
          <Link
            underline="hover"
            onClick={() => navigate(ROUTER.FORGOT_PASSWORD.path)}
          >
            sectionAuthText.iforgotMyPassword
          </Link>
        </GridComp>

        <GridComp item xs={6} display={"flex"} justifyContent={"end"}>
          <Link
            id="btn-go-to-sign-up"
            underline="hover"
            onClick={() => navigate(ROUTER.SIGN_UP.path)}
          >
            sectionAuthText.iWantToBeAMember
          </Link>
        </GridComp>
      </GridComp>
    </React.Fragment>
  );
}

export default Footer;
