import {
  INTERPOLATION_WORD_KEYS,
  VALIDATION_TEXT_WAITING_FOR_PROPS_READY_TYPE,
} from "../utils/constants/languageConstant";

export function translateBefore(translateWordKey) {
  let translateWordKeyActual = translateWordKey;
  let obj = undefined;

  if (VALIDATION_TEXT_WAITING_FOR_PROPS_READY_TYPE[translateWordKeyActual]) {
    let selectedTextWaitingForPropsReadyType =
      VALIDATION_TEXT_WAITING_FOR_PROPS_READY_TYPE[translateWordKeyActual];

    obj = {};

    for (let i = 0; i < selectedTextWaitingForPropsReadyType.length; i++) {
      obj[selectedTextWaitingForPropsReadyType[i].key] =
        selectedTextWaitingForPropsReadyType[i].value;
    }
  }

  if (checkInterpolation(translateWordKeyActual)) {
    let interpolationWordResult = prepareInterpolationTranslation(
      translateWordKeyActual
    );

    obj = interpolationWordResult.dynamicString;
    translateWordKeyActual = interpolationWordResult.staticString;
  }

  return { wordKey: translateWordKeyActual, wordProps: obj };
}

//TODO prepareInterpolationTranslation
//* Örnek kullanım ProductPriceDetail.js dosyasında var...

export function prepareInterpolationTranslation(stringData) {
  const parts = stringData.split(",{");

  const staticString = parts[0];
  const dynamicPart = parts[1].slice(0, -1); // Sonundaki süslü parantezi kaldır

  const dynamicObject = {};
  dynamicPart.split(",").forEach((item) => {
    const [key, value] = item.split(":");
    dynamicObject[key.trim()] = value.trim();
  });

  const result = {
    staticString: staticString,
    dynamicString: dynamicObject,
  };

  return result;
}

//* Örnek kullanım
//* const stringData =
//*   "belongingToTheProject.productPriceDetailDialogTitle,{companyName:${data.companyName},userName:${userName}}";
//* const parsedData = prepareTranslationData(stringData);
//* console.log(parsedData);

//TODO prepareInterpolationTranslation

function checkInterpolation(stringData) {
  const parts = stringData.split(",");
  const key = parts[0].trim();

  if (INTERPOLATION_WORD_KEYS[key]) {
    return true;
  }

  return false;
}
