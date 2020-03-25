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
  

  
  export const reducers = {
    createuser: createReducer(getInitStateFromStorage("createuser", asyncInitialState), {
      ...asyncCases(CREATEUSER),
      [CREATEUSER.SUCCESS.toString()]: (state, action) => asyncInitialState
    }),
    // logout: createReducer(asyncInitialState, {
    //   ...asyncCases(LOGOUT)
    // })
  };