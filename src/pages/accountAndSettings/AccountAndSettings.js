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
    </GridComp>
  );
};

export default AccountAndSettings;
