import React from "react";
import { THEMES } from "../utils/constants/themeConstant";
import {
  themeGetItem,
  themeSetItem,
} from "../utils/helper/localStorageOperations";

const initialState = {
  theme: THEMES.DARK.key,
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const initialState = () => {
    const storedTheme = themeGetItem(true);
    return storedTheme ? storedTheme : THEMES.DARK.key;
  };

  const [theme, _setTheme] = React.useState(initialState());

  const setTheme = (theme) => {
    themeSetItem(theme, true);
    _setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
