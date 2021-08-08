import placeReducer from "./placeReducer";
import placeData from "./placeData";
import themeReducer from "./themeReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    place: placeReducer,
    placeData: placeData,
    theme: themeReducer
});

export default rootReducers;