import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducers from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
