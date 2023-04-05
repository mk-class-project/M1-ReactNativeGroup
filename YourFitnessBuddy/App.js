import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components/native";
import ThemeContext from "./src/global/themeContext";
import BuddyThemes from "./src/components/themeProvider";

import setupAxiosInterceptors from "./src/config/interceptor";
import Router from "./src/config/router";
import { store } from "./src/config/store";

import RNBootSplash from "react-native-bootsplash";

export default App = () => {
  const [theme, setTheme] = useState(BuddyThemes.Ronnie);

  const handleThemeChange = (newTheme) => {
    setTheme(BuddyThemes[newTheme]);
  };

  useEffect(() => {
    setupAxiosInterceptors();

    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 3000);
    
  }, []);

  return (
    <ThemeContext.Provider value={handleThemeChange}>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
      </Provider>
    </ThemeContext.Provider>
  );
};
