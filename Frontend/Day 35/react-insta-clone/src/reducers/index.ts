import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user:userReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;

export { rootReducer };