import jwtDecode from "jwt-decode";

export function isValidToken(accessToken) {
  if (
    !accessToken ||
    "undefined" === typeof accessToken ||
    accessToken === "undefined"
  ) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
}
