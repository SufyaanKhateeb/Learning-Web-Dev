import todosReducer from "./todoReducer";
import themeChange from "./themeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ todos: todosReducer, theme: themeChange });

export type reducerType = ReturnType<typeof rootReducer>;

export { rootReducer };
