import React, { useState } from "react";
import TextFieldComp from "../TextField";
import { activeCountryNumaricFormatCompProps } from "../../utils/constants/appConstants/currencyFormatsConstant";
import { NumericFormat } from "react-number-format";

const NumericFormatComp = ({ onChange, value, ...rest }) => {
  const activeCurrencyFormat = activeCountryNumaricFormatCompProps;
  const [currency, setCurrency] = useState(value / 100);

  console.log(rest);
  return (
    <NumericFormat
      customInput={TextFieldComp}
      {...rest}
      value={currency}
      {...activeCurrencyFormat}
      onValueChange={(target) => {
        setCurrency(target.floatValue);
        onChange && onChange(target.floatValue * 100);
      }}
    />
  );
};

export default NumericFormatComp;
