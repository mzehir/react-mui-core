import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import UserCard from "./sidebar/userCard/UserCard";
import Content from "./content/Content";
import GridComp from "../../components/Grid";

import {
  contentItemsReturn,
  isDefaultPageItemKeyReturn,
  sidebarItemsReturn,
} from "./helpers/constant";
import { STATE_KEY } from "../../utils/constants/locationStateKey";
import { accountAndSettingsPageResizeSettings } from "../../utils/constants/resizeWindowConstant";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const AccountAndSettings = () => {
  const location = useLocation();

  const [activeSidebarItemKey, setActiveSidebarItemKey] = useState("");
  const [sidebarItems] = useState(sidebarItemsReturn);
  const [contentItems] = useState(contentItemsReturn);

  const onChangeActiveSidebarItemKey = (key) => {
    setActiveSidebarItemKey(key);
  };

  useEffect(() => {
    if (
      location.state &&
      Object.keys(location.state).includes(STATE_KEY.ACCOUNT_SETTINGS_PAGES.key)
    ) {
      setActiveSidebarItemKey(
        location.state[STATE_KEY.ACCOUNT_SETTINGS_PAGES.key]
      );
    } else {
      let res = isDefaultPageItemKeyReturn();
      setActiveSidebarItemKey(res);
    }
  }, [location?.state]);

  return (
    <GridComp container spacing={5}>
      <GridComp
        item
        {...accountAndSettingsPageResizeSettings.companyAndUserCardAndSidebarWrapperGrid}
      >
        <UserCard />

        <div style={{ width: "5px", height: "25px" }}></div>

        <Sidebar
          activeItemKey={activeSidebarItemKey}
          itemOnClick={onChangeActiveSidebarItemKey}
          sidebarItems={sidebarItems}
        />
      </GridComp>

      <GridComp
        item
        {...accountAndSettingsPageResizeSettings.contentWrapperGrid}
      >
        <Content
          activeSidebarItemKey={activeSidebarItemKey}
          contentItems={contentItems}
        />
      </GridComp>

      {/* <GridComp item xs={12}>
        <Deneme />
      </GridComp> */}
    </GridComp>
  );
};

export default AccountAndSettings;

const Deneme = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isXl = useMediaQuery(theme.breakpoints.down("xl"));

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Şu anda hangi breakpoint'in aktif olduğunu kontrol etmek için
  let currentBreakpoint = "xl";

  if (isXs) {
    currentBreakpoint = "xs";
  } else if (isSm) {
    currentBreakpoint = "sm";
  } else if (isMd) {
    currentBreakpoint = "md";
  } else if (isLg) {
    currentBreakpoint = "lg";
  }

  return (
    <div>
      <p>Şu anda kullanılan breakpoint: {currentBreakpoint}</p>
      <p>Pencerenin genişliği: {windowWidth}</p>
      {/* Burada istediğiniz JSX ve bileşenleri ekleyebilirsiniz */}
    </div>
  );
};
