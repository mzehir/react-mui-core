import SecurityIcon from "@mui/icons-material/Security";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";

import PersonalInformation from "../content/personalInformation/PersonalInformation";
import CriticalInformation from "../content/criticalInformation/CriticalInformation";
import CardPaymentInformation from "../content/cardPaymentInformation/CardPaymentInformation";
import NotificationSettings from "../content/notificationSettings/NotificationSettings";

export const CONTENT_PAGES_ITEMS = {
  PERSONAL_INFORMATION: {
    key: "personalinformation",
    component: PersonalInformation,
    label: "belongingToTheProject.personalInformation",
    icon: PersonIcon,
    isDefault: true,
  },

  CRITICAL_INFORMATION: {
    key: "criticalinformation",
    component: CriticalInformation,
    label: "belongingToTheProject.criticalInformation",
    icon: SecurityIcon,
  },

  CARD_PAYMENT_INFORMATION: {
    key: "cardpaymentinformation",
    component: CardPaymentInformation,
    label: "belongingToTheProject.cardPaymentInformation",
    icon: CreditCardIcon,
  },

  NOTIFICATION_SETTINGS: {
    key: "notificationsettings",
    component: NotificationSettings,
    label: "belongingToTheProject.notificationSettings",
    icon: EditNotificationsIcon,
  },
};

export const isDefaultPageItemKeyReturn = () => {
  let resultStr = "";
  let contentPagesItems = CONTENT_PAGES_ITEMS;
  let contentPagesItemsKeys = Object.keys(contentPagesItems);

  for (let i = 0; i < contentPagesItemsKeys.length; i++) {
    if (contentPagesItems[contentPagesItemsKeys[i]].isDefault) {
      resultStr = contentPagesItems[contentPagesItemsKeys[i]].key;
    }
  }

  if (!resultStr) {
    resultStr = contentPagesItems.CRITICAL_INFORMATION.key;
  }

  return resultStr;
};

export const sidebarItemsReturn = () => {
  let resultArr = [];
  let contentPagesItems = CONTENT_PAGES_ITEMS;
  let contentPagesItemsKeys = Object.keys(contentPagesItems);

  for (let i = 0; i < contentPagesItemsKeys.length; i++) {
    let item = contentPagesItemsKeys[i];
    resultArr.push({
      key: contentPagesItems[item].key,
      label: contentPagesItems[item].label,
      icon: contentPagesItems[item].icon,
    });
  }

  return resultArr;
};

export const contentItemsReturn = () => {
  let resultArr = [];
  let contentPagesItems = CONTENT_PAGES_ITEMS;
  let contentPagesItemsKeys = Object.keys(contentPagesItems);

  for (let i = 0; i < contentPagesItemsKeys.length; i++) {
    resultArr.push({
      key: contentPagesItems[contentPagesItemsKeys[i]].key,
      component: contentPagesItems[contentPagesItemsKeys[i]].component,
      label: contentPagesItems[contentPagesItemsKeys[i]].label,
      icon: contentPagesItems[contentPagesItemsKeys[i]].icon,
    });
  }

  return resultArr;
};
