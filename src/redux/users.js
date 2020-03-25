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
  
  const url = domain + "/users";
  
  const CREATEUSER = createActions("createuser");
  
  export const user = userData => dispatch => {
    dispatch(CREATEUSER.START());
  
    return fetch(url, {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(userData)
    })
      .then(handleJsonResponse)
      .then(result => dispatch(CREATEUSER.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(CREATEUSER.FAIL(err))));
  };
  
  const GETUSER = createActions("getuser");
  export const getuser = userData => dispatch => {
    dispatch(GETUSER.START());

    return fetch(url + "/" + userData, {
      method: "GET",
      headers: jsonHeaders
    })
      .then(handleJsonResponse)
      .then(result => dispatch(GETUSER.SUCCESS(result)))
      .then(err => Promise.reject(dispatch(GETUSER.FAIL(err))));
  }

  
  export const reducers = {
    createuser: createReducer(getInitStateFromStorage("createuser", asyncInitialState), {
      ...asyncCases(CREATEUSER),
      [CREATEUSER.SUCCESS.toString()]: (state, action) => asyncInitialState
    }),
    getuser: createReducer(asyncInitialState, {
      ...asyncCases(GETUSER),
    })
  };