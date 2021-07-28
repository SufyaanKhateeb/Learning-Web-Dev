//showing use of useContext and making custom hooks
import React from "react";
import Context from "./components/context";
import { ThemeProvider } from "./components/themecontext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Context />
      </ThemeProvider>
    </>
  );
}
