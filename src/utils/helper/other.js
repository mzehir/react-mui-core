import { activeFormatCurrencyMethodProps } from "../constants/appConstants/currencyFormatsConstant";

//TODO *****************************************************************
//TODO *****************************************************************
//TODO *****************************************************************
// export function isNullOrUndefinedOrEmptyString(value) {
//   return (
//     value === null ||
//     value === undefined ||
//     (typeof value === "string" && value.trim() === "")
//   );
// }

//TODO *****************************************************************
//TODO *****************************************************************
//TODO *****************************************************************
// Verilen string'i bir koordinat objesine dönüştüren fonksiyon
export function stringToGoogleCoordinates(str) {
  // Verilen stringi virgülle böleriz
  const parts = str.split(":");

  // Düzgün sayı değerlerine dönüştürürüz ve parseFloat kullanırız
  const lat = parseFloat(parts[0]);
  const lng = parseFloat(parts[1]);

  // Yeni bir koordinat objesi oluştururuz ve döneriz
  return { lat, lng };
}

//TODO *****************************************************************
//TODO *****************************************************************
//TODO *****************************************************************
export function googleCoordinatesToString(coordinates) {
  const { lat, lng } = coordinates;
  return `${lat}:${lng}`;
}

//TODO *****************************************************************
//TODO *****************************************************************
//TODO *****************************************************************
/**
 * Verilen iki dizi arasında eşleşen öğeleri filtreleyen bir fonksiyon.
 *
 * @param {Array} allItems - Tüm öğelerin bulunduğu dizi.
 * @param {Array} selectedItems - Seçilen öğelerin bulunduğu dizi.
 * @returns {Array} - Eşleşen öğeleri içeren yeni bir dizi.
 */
export function filterMatchingItems(allItems, selectedItems) {
  // selectedItems dizisindeki her eleman için bir filtre işlemi yapalım.
  const result = selectedItems.map((selectedItem) => {
    // allItems dizisinde selectedItem değerini arayalım ve eşleşenleri alalım.
    const matchingItem = allItems.find((item) => item.value === selectedItem);

    // Eşleşen öğe varsa, bu öğeyi result dizisine ekleyelim.
    if (matchingItem) {
      return matchingItem;
    }
  });

  // Sonucu temizlemek için boş değerlerden kurtulalım.
  return result.filter((item) => item !== undefined);
}

// filterMatchingItems örnek kullanım:
// let allProducts = [
//   { value: "HAZELNUT", label: "hazelnut" },
//   { value: "PEANUT", label: "peanut" },
// ];

// let selectedProducts = ["HAZELNUT"];

// let result = filterMatchingItems(allProducts, selectedProducts);
// console.log(result);

//TODO *****************************************************************
//TODO *****************************************************************
//TODO *****************************************************************
/**
 * Verilen bir sayıyı belirtilen dil ve para birimi formatına dönüştürür.
 *
 * @param {number} number - Dönüştürülecek sayı
 * @returns {string} - Dönüştürülmüş sayı, belirtilen dil ve para birimi formatında
 */
export function formatCurrency(number) {
  // activeFormatCurrencyMethodProps değişkeninden dil ve para birimi bilgilerini alarak
  // yeni bir `Intl.NumberFormat` örneği oluşturun.
  const formatter = new Intl.NumberFormat(
    activeFormatCurrencyMethodProps.locale, // Dönüşümün yapılacağı dil
    {
      style: "currency", // Sayının para birimi formatında görüntüleneceğini belirtir
      currency: activeFormatCurrencyMethodProps.currency, // Kullanılacak para birimi
    }
  );

  // Sayıyı belirtilen para birimi formatına dönüştürün.
  // Burada, sayının 100'e bölünmesi, özgün değerin kuruş kısmının iki ondalık hane ile sınırlanmasını sağlar.
  return formatter.format(number / 100);
}
