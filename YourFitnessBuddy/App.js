import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components/native";
import ThemeContext from "./src/global/themeContext";
import BuddyThemes from "./src/components/themeProvider";

import setupAxiosInterceptors from "./src/config/interceptor";
import Router from "./src/config/router";

export default App = () => {
  const [theme, setTheme] = useState(BuddyThemes.Ronnie);

  const handleThemeChange = (newTheme) => {
    setTheme(BuddyThemes[newTheme]);
  };

  useEffect(() => {
    setupAxiosInterceptors();
  }, []);

  return (
    <ThemeContext.Provider value={handleThemeChange}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
