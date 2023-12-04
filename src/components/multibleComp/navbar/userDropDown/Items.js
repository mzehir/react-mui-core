import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUseContext from "../../../../hooks/AuthUseContext";

import MenuComp from "../../../Menu";
import MenuItemComp from "../../../MenuItem";

import { ROUTER } from "../../../../utils/constants/routerConstant";

import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Items({ anchorMenu, closeMenu }) {
  const navigate = useNavigate();
  const { signOut } = AuthUseContext();

  const [menuItems] = useState([
    {
      id: "my-account-id",
      text: "componentsText.myAccount",
      onClick: async () => {
        navigate(ROUTER.ACCOUNT_AND_SETTINGS.path);
        closeMenu();
      },
      icon: AccountCircleIcon,
    },
    {
      id: "sign-out-id",
      text: "componentsText.signOut",
      onClick: async () => {
        await signOut();
      },
      icon: LogoutIcon,
    },
  ]);

  return (
    <MenuComp
      anchorEl={anchorMenu}
      open={Boolean(anchorMenu)}
      onClose={closeMenu}
    >
      {menuItems.map((item, index) => (
        <MenuItemComp
          id={item.id}
          key={index}
          Icon={item.icon}
          onClick={item.onClick}
        >
          {item.text}
        </MenuItemComp>
      ))}
    </MenuComp>
  );
}

export default Items;
