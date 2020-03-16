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
  
  const GETMESSAGES = createActions("getmessages");
  export const getmessages = messageData => dispatch => {
      dispatch(GETMESSAGES.START());

      return fetch(url + "/messages", {
          method: "GET",
          headers: jsonHeaders,
          body: JSON.stringify(messageData)
      })
        
      .then(handleJsonResponse)
      .then(result => dispatch(GETMESSAGES.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(GETMESSAGES.FAIL(err))));
  }

  
  export const reducers = {
    createpost: createReducer(getInitStateFromStorage("createpost", asyncInitialState), {
      ...asyncCases(CREATEPOST),
    //   [CREATEPOST.SUCCESS.toString()]: (state, action) => asyncInitialState
    }),
    getmessages: createReducer(getInitStateFromStorage("getmessages", asyncInitialState), {
        ...asyncCases(GETMESSAGES),
  })
}
