function setItem(key, data) {
  localStorage.setItem(key, data);
}

function getItem(key) {
  return localStorage.getItem(key);
}

//* Theme
export function themeSetItem(data, isStringify) {
  let actualData = data;

  if (isStringify) {
    actualData = JSON.stringify(actualData);
  }

  setItem("theme", actualData);
}

export function themeGetItem(isParse) {
  let data = getItem("theme");

  if (isParse && data) {
    data = JSON.parse(data);
  }

  return data;
}

//* Language
export function languageSetItem(data, isStringify) {
  let actualData = data;

  if (isStringify) {
    actualData = JSON.stringify(actualData);
  }

  setItem("language", actualData);
}

export function languageGetItem(isParse) {
  let data = getItem("language");

  if (isParse && data) {
    data = JSON.parse(data);
  }

  return data;
}
