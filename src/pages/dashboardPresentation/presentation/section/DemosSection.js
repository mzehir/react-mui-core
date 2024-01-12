import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";

import BoxComp from "../../../../components/Box";
import TypographyComp from "../../../../components/Typography";
import GridComp from "../../../../components/Grid";
import { ROUTER } from "../../../../utils/constants/routerConstant";

import { Container } from "@mui/material";
import { spacing } from "@mui/system";

const Wrapper = styled.div`
  ${spacing};
  background: ${(props) => props.theme.palette.background.paper};
  text-align: center;
`;

const DemoContent = styled.div(spacing);

const DemoLink = styled.div`
  cursor: pointer;
`;

const DemoImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 4px 12px 0 rgba(18, 38, 63, 0.125);
  transition: 0.15s ease-in-out;
  border-radius: 4px;

  &:hover {
    transform: scale(1.0325);
  }
`;

const Variant = ({ title, img, path }) => {
  const navigate = useNavigate();

  return (
    <GridComp item xs={12} sm={6} md={4} lg={4}>
      <DemoContent px={2}>
        <DemoLink onClick={() => window.open(path, "_blank")}>
          <DemoImage
            alt={`${title}`}
            src={`/static/img/screenshots/${img}.png`}
          />
        </DemoLink>
        <BoxComp mb={3} />
        <TypographyComp variant="h6">{title}</TypographyComp>
      </DemoContent>
    </GridComp>
  );
};

function DemosSection() {
  const variantItems = [
    {
      title: "Dashboard",
      imgPath: "dashboard",
      path: ROUTER.DASHBOARD.path,
    },
    {
      title: "Custom Filter",
      imgPath: "customFilter",
      path: ROUTER.CUSTOM_FILTER_CUSTOM.path,
    },
    {
      title: "Custom Text Editor",
      imgPath: "customTextEditor",
      path: ROUTER.TEXT_EDITOR_CUSTOM.path,
    },
    {
      title: "Advanced Select",
      imgPath: "advancedSelect",
      path: ROUTER.ADVANCED_SELECT_CUSTOM.path,
    },
    {
      title: "React Toastify",
      imgPath: "reactToastify",
      path: ROUTER.REACT_TOASTIFY_CUSTOM.path,
    },
    {
      title: "Snackbar",
      imgPath: "snackbar",
      path: ROUTER.SNACKBAR_CORE.path,
    },
    {
      title: "Custom Alerts",
      imgPath: "customAlerts",
      path: ROUTER.ALERTS_CUSTOM.path,
    },
    {
      title: "Custom Buttons",
      imgPath: "customButtons",
      path: ROUTER.BUTTONS_CUSTOM.path,
    },
    {
      title: "Reset Password",
      imgPath: "resetPassword",
      path: ROUTER.RESET_PASSWORD.path,
    },
  ];
  return (
    <Wrapper pt={16} pb={20} id="demos">
      <Container>
        <TypographyComp variant="h2" component="h3" gutterBottom>
          componentsText.inAppVisuals
        </TypographyComp>

        <BoxComp mb={8} />

        <GridComp container spacing={10}>
          {variantItems.map((item, index) => (
            <Variant
              key={index.toString()}
              title={item.title}
              img={item.imgPath}
              path={item.path}
            />
          ))}
        </GridComp>
      </Container>
    </Wrapper>
  );
}

export default DemosSection;
