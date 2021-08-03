import nameReducer from "./nameReducer";
import emailReducer from "./emailReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    namech: nameReducer,
    emailch: emailReducer
});

export default rootReducers;