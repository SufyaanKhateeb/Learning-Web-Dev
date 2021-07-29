import React from "react";
import { useTheme, useThemeupdate } from "./themecontext";

export default function Context() {
  const theme = useTheme();
  const toggle = useThemeupdate();
  const styles = {
    backgroundColor: theme ? "#333" : "#CCC",
    color: theme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
    textAlign: "center",
  };
  const stylesouter = {
    backgroundColor: theme ? "#CCC" : "#333",
    color: theme ? "#333" : "#CCC",
    width: "100vw",
    height: "100vh",
  };
  return (
    <div style={stylesouter}>
      <button onClick={toggle}>Toggle Theme</button>
      <div style={styles}>THEME CHANGER</div>
    </div>
  );
}
