import axiosInstance from "./axios";

export function axiosAuthorizationSetToken(token) {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function axiosAuthorizationDeleteToken() {
  delete axiosInstance.defaults.headers.common.Authorization;
}
