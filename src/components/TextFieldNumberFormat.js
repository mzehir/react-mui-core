import React from "react";
import { NumericFormat } from "react-number-format";
import TextFieldComp from "./TextField";

const TextFieldNumberFormat = () => {
  return <NumericFormat value={12323} customInput={TextFieldComp} />;
};

export default TextFieldNumberFormat;

//* Tüm ülkelerin decimalSeparator apileri bulunmalı sonra devam edecek.

// customInput React.Component<any>
// default: null
// Özel bileşenler bu props ile kullanılır.

// value number | string
// default: undefined
// İnputun giriş alan değeridir.

// defaultValue number | string
// default : undefined
// Value değeri okunamaz ise yada bi hata olursa value ile alakalı bu değer kullanılır.

// getInputRef elm => void
// default: null
// Bildiğimiz ref

// isAllowed (values) => boolean
// default: undefined
// value değerinin kuralını doğrulamak için bir denetleyici işlevi. Bu işlev false döndürürse, onChange yöntemi tetiklenmez ve giriş değeri değişmez.

// onValueChange (values, sourceInfo) => {}
// default: undefined
// Bu işleyici, giriş alanındaki herhangi bir değer değişikliğine erişim sağlar ve yalnızca bir destek değiştiğinde veya kullanıcı girişi değiştiğinde
// tetiklenir. Birinci olarak valueObject ve ikinci olarak sourceInfo olmak üzere iki argüman sağlar . valueObject parametresi , verilen giriş alanının,
// ve ' lerini içerir. SourceInfo , Nesneyi ve tetiklenen değişikliğin bir olaydan mı yoksa donanım değişikliğinden mi kaynaklandığını gösteren bir
// anahtar içerir . Bu, değişikliğin kullanıcı kaynaklı mı yoksa herhangi bir prop değerinin güncellenmesi nedeniyle kontrolsüz bir değişiklik
// mi olduğunu belirlemede özellikle yararlıdır.formattedValue value floatValue event source

// type string
// default: text
// Bu, giriş türü öznitelik değerinin geçirilmesine izin verir, Desteklenen türler şunları içerir: text| tel|password

//!----------------------------------------------------------------------------------------------------------------------------------

//! allowLeadingZeros boolean
// default: false
// 2 ya da daha fazla basamaklı sayılardaki en soldaki sayının sıfır olmasını engeller. Eğer değer true ise. 0 değeri inputtan focus kaybolunca yansır.

//! allowNegative boolean
// default: true
// Negatif değer kontrolüdür. Değer true ise negatif değer girilebilir.

// allowedDecimalSeparators Array<string>
// default: undefined
// Array içerisine yazılan karaktere basıldığında '.(nokta)' işaretini koyar.

//! decimalScale number
// default: undefined
// Tanımlanırsa, ondalık noktadan sonraki basamak sayısını sınırlar.

//! decimalSeparator string
// default: '.'
// Ondalık karakteri tanımlar. Daha iyi anlaşılması için =>
// Eğer ondalık karakter ',' olarak tanımlandıysa '.' karakterine basılsa bile ',' karakterini koyar.

//! prefix string
// default:undefined
// Giriş değerinden önce önek karakterini ekler. => Mesela '$' gibi

// suffix string
// default: undefined
// Giriş değerinden sonra son eki ekler

//! thousandsGroupStyle string
// default: ,
// Binlik gruplama stilini tanımlar.

// ??
// Bin stili (bin)  : 123.456.789
// Hint stili (lakh): 12.34.56.789
// Çin stili (wan)  : 1.2345.6789
