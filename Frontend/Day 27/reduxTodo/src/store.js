import rootReducers from "./reducers";
import { createStore,applyMiddleware } from "redux";
// import logger from 'redux-logger'
import thunk from 'redux-thunk';

const store = createStore(rootReducers,applyMiddleware(thunk));
// applyMiddleware(logger)
export default store;