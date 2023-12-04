export const nameMinLength = 2;
export const nameMaxLength = 100;

export const surnameMinLength = 2;
export const surnameMaxLength = 100;

export const passwordMinLength = 8;
export const passwordMaxLength = 100;

export const isEmail = /^[a-zA-Z0-9._+%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const isPassword = new RegExp(
  `^(?=.*\\d)(?=.*\\W+)(?=.*[a-z])(?=.*[A-Z]).{${passwordMinLength},${passwordMaxLength}}$`
);

export const isPhoneNumber = /^(?!0)\d{10}$/;
export const isOnlyNumbers = /^\d+$/;

export const isFacebookURL =
  /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9(\.\?)?\/]*$/;
export const isInstagramURL =
  /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9._]*\/?$/;
