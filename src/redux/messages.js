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
  
    return fetch(url + "/messages", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(postData)
    })
      .then(handleJsonResponse)
      .then(result => dispatch(CREATEPOST.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(CREATEPOST.FAIL(err))));
  };
  

  
  export const reducers = {
    login: createReducer(getInitStateFromStorage("createpost", asyncInitialState), {
      ...asyncCases(CREATEPOST),
      [CREATEPOST.SUCCESS.toString()]: (state, action) => asyncInitialState
    }),
    
  };
  