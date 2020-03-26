import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducers as authReducers } from "./auth";
import { reducers as userReducers } from "./users";
import { reducers as messageReducers} from "./messages";
import { reducers as likesReducers } from "./likes"
export * from "./auth";
export * from "./users";
export * from "./likes";
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export const store = configureStore({
  // add reducers to store
  reducer: {
    router: connectRouter(history),
    auth: combineReducers(authReducers),
    user: combineReducers(userReducers),
    messages: combineReducers(messageReducers),
    likes: combineReducers(likesReducers)
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production"
});



// registers a function to be called on state changes
store.subscribe(() => {
  localStorage.setItem("login", JSON.stringify(store.getState().auth.login));
  localStorage.setItem("createpost", JSON.stringify(store.getState().messages.createpost));
  localStorage.setItem("getmessages", JSON.stringify(store.getState().messages.getmessages));
  localStorage.setItem("getuser", JSON.stringify(store.getState().user.getuser));
  localStorage.setItem("createuser", JSON.stringify(store.getState().user.createuser));
  localStorage.setItem("addpicture", JSON.stringify(store.getState().user.addpicture));
});
