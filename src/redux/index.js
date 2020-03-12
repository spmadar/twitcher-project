import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducers as authReducers } from "./auth";
import { reducers as userReducers } from "./users";
export * from "./auth";
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
export const store = configureStore({
  // add reducers to store
  reducer: {
    router: connectRouter(history),
    auth: combineReducers(authReducers),
    user: combineReducers(userReducers)
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production"
});
// registers a function to be called on state changes
store.subscribe(() => {
  localStorage.setItem("login", JSON.stringify(store.getState().auth.login));
});
