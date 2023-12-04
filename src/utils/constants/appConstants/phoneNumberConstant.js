const activeCountryCodeByPhone = "tr";

const PHONE_FORMATS_AND_RULES = {
  tr: {
    patternFormatCompProps: {
      phoneFormatProps: {
        mask: "_",
        format: "(###) ### ## ##",
      },
    },

    yupRulesProps: {
      phoneProps: {
        numberLength: 10,
        nonZeroFirstDigit: true,
      },
    },
  },
  en: {},
};

export const activeCountryPhoneFormatCompProps = {
  ...PHONE_FORMATS_AND_RULES[activeCountryCodeByPhone].patternFormatCompProps
    .phoneFormatProps,
};

export const activeCountryPhoneFormatRulesProps = {
  ...PHONE_FORMATS_AND_RULES[activeCountryCodeByPhone].yupRulesProps.phoneProps,
};
