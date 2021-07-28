import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdate = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeupdate() {
    return useContext(ThemeUpdate);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);

  function toggletheme() {
    setTheme((prevTheme) => !prevTheme);
  }
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdate.Provider value={toggletheme}>
          {children}
      </ThemeUpdate.Provider>
    </ThemeContext.Provider>
  );
}
