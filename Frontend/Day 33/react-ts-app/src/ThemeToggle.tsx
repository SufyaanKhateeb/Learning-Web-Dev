import React, { useContext } from "react";
import ThemeContext from "./themeContext";
import { InitialState } from "./themeContext";

const ThemeToggle = () => {
    const { theme, setTheme } = useContext<InitialState>(ThemeContext);
    return (<button className={theme ? "theme-toggle dark" : "theme-toggle"} onClick={() => {
        setTheme(!theme);
    }}>
        {theme ? "Light" : "Dark"}
    </button>);
}

export default ThemeToggle;
