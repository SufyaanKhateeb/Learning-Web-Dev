import { createContext } from "react";

export interface InitialState {
    theme: boolean,
    setTheme: (theme: boolean) => void
}

const initialState : InitialState = {
    theme:false,
    setTheme:(theme:boolean)=>{}
}

 const ThemeContext = createContext<InitialState>(initialState);
 
 export default ThemeContext;