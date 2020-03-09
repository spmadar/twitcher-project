import {
    domain,
    jsonHeaders,
    handleJsonResponse,
    getInitStateFromStorage,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer
  } from "./helpers";
  
  const url = domain + "/messages";
  
  const CREATEPOST = createActions("createpost");
  export const createpost = postData => dispatch => {
    dispatch(CREATEPOST.START());
  
    return fetch(url + "/login", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(postData)
    })
      .then(handleJsonResponse)
      .then(result => dispatch(LOGIN.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(LOGIN.FAIL(err))));
  };
  

  
  export const reducers = {
    login: createReducer(getInitStateFromStorage("login", asyncInitialState), {
      ...asyncCases(LOGIN),
      [LOGOUT.SUCCESS.toString()]: (state, action) => asyncInitialState
    }),
    logout: createReducer(asyncInitialState, {
      ...asyncCases(LOGOUT)
    })
  };
  