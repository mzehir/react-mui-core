import React, { useState } from "react";
import AuthUseContext from "../../../../../hooks/AuthUseContext";

import BoxComp from "../../../../../components/Box";
import TypographyComp from "../../../../../components/Typography";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CakeIcon from "@mui/icons-material/Cake";

const UserOtherInformationsSection = () => {
  const { name, surname, email, phone, birthDate } = AuthUseContext();

  const [userInformationsItems] = useState([
    { text: `${name ? name : ""} ${surname ? surname : ""}`, icon: PersonIcon },
    { text: email, icon: EmailIcon },
    { text: phone, icon: PhoneIcon },
    { text: birthDate, icon: CakeIcon },
  ]);

  return (
    <BoxComp sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {userInformationsItems.map((item, index) => (
        <BoxComp
          key={index.toString()}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <item.icon />
          <TypographyComp noWrap={true}>{item.text}</TypographyComp>
        </BoxComp>
      ))}
    </BoxComp>
  );
};

export default UserOtherInformationsSection;
