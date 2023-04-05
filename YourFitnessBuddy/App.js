import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components/native";
import ThemeContext from "./src/global/themeContext";
import BuddyThemes from "./src/components/themeProvider";

import setupAxiosInterceptors from "./src/config/interceptor";
import Router from "./src/config/router";
import { store, persistor } from "./src/config/store";
import { PersistGate } from "redux-persist/integration/react";

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
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ThemeContext.Provider>
  );
};
