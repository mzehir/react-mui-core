export const setItem = ({ key, value }) => {
  sessionStorage.setItem(key, value);
};

export const getItem = (key) => {
  return sessionStorage.getItem(key);
};

export const removeItem = (key) => {
  sessionStorage.removeItem(key);
};

//? ******** Custom Methods ********
//? ******** Custom Methods ********
//? ******** Custom Methods ********
//? ******** Custom Methods ********
//? ******** Custom Methods ********

//****** AccessToken ******\\
//****** AccessToken ******\\
//****** AccessToken ******\\

export const setAccessToken = (data) => {
  setItem({ key: "accessToken", value: data });
};

export const getAccessToken = () => {
  return getItem("accessToken");
};

export const removeAccessToken = () => {
  removeItem("accessToken");
};

//****** AccessToken ******\\
//****** AccessToken ******\\
//****** AccessToken ******\\

//****** IdleTimeOut ******\\
//****** IdleTimeOut ******\\
//****** IdleTimeOut ******\\

export const setIdleTimeOut = (data) => {
  setItem({ key: "idleTimeOut", value: data });
};

export const getIdleTimeOut = () => {
  let getData = getItem("idleTimeOut");
  if (getData) {
    return parseInt(getData);
  }
};

export const removeIdleTimeOut = () => {
  removeItem("idleTimeOut");
};

//****** IdleTimeOut ******\\
//****** IdleTimeOut ******\\
//****** IdleTimeOut ******\\

//****** IdleTimeOutDuration ******\\
//****** IdleTimeOutDuration ******\\
//****** IdleTimeOutDuration ******\\

export const setIdleTimeOutDuration = (data) => {
  setItem({ key: "idleTimeOutDuration", value: data });
};

export const getIdleTimeOutDuration = () => {
  let getData = getItem("idleTimeOutDuration");

  if (getData) {
    return parseInt(getData);
  }
};

export const removeIdleTimeOutDuration = () => {
  removeItem("idleTimeOutDuration");
};

//****** IdleTimeOutDuration ******\\
//****** IdleTimeOutDuration ******\\
//****** IdleTimeOutDuration ******\\

//****** SessionTimeOut ******\\
//****** SessionTimeOut ******\\
//****** SessionTimeOut ******\\

export const setSessionTimeOut = (data) => {
  setItem({ key: "sessionTimeOut", value: data });
};

export const getSessionTimeOut = () => {
  let getData = getItem("sessionTimeOut");
  if (getData) {
    return parseInt(getData);
  }
};

export const removeSessionTimeOut = () => {
  removeItem("sessionTimeOut");
};

//****** SessionTimeOut ******\\
//****** SessionTimeOut ******\\
//****** SessionTimeOut ******\\

//!-------------------------------------------------------------------
//!-------------------------------------------------------------------
//!-------------------------------------------------------------------
//!-------------------------------------------------------------------
//!-------------------------------------------------------------------
//!-------------------------------------------------------------------
//!-------------------------------------------------------------------
//!-------------------------------------------------------------------
//!-------------------------------------------------------------------
//!-------------------------------------------------------------------
//!-------------------------------------------------------------------

function setCookie(cname, cvalue, aliveTimeot) {
  const d = new Date();
  d.setTime(d.getTime() + aliveTimeot);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function removeCookie(cname) {
  setCookie(cname, "", 1000);
}

//****** BypassVerifyToken ******\\
//****** BypassVerifyToken ******\\
//****** BypassVerifyToken ******\\

export const setBypassVerifyToken = (data, expressIn) => {
  setCookie("bypassVerifyToken", data, expressIn ? expressIn : 60 * 60 * 1000);
};

export const getBypassVerifyToken = () => {
  return getCookie("bypassVerifyToken");
};

export const removeBypassVerifyToken = () => {
  removeCookie("bypassVerifyToken");
};

//****** BypassVerifyToken ******\\
//****** BypassVerifyToken ******\\
//****** BypassVerifyToken ******\\
