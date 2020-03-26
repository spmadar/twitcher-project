import {
    domain,
    jsonHeaders,
    handleJsonResponse,
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
  };

  const ADDPICTURE = createActions("addpicture");
  export const addpicture = (formTag) => (dispatch, getState) => {
    dispatch(ADDPICTURE.START());

    const username = getState().auth.login.result.username;
    const token = getState().auth.login.result.token;

    return fetch(url + "/" + username + "/picture", {
      method: "PUT",
      headers: {Authorization: "Bearer " + token, Accept: "application/json"},
      body: new FormData(formTag)
    })
      .then(handleJsonResponse)
      .then(result => dispatch(ADDPICTURE.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(ADDPICTURE.FAIL(err))));
  };
  
  export const reducers = {
    createuser: createReducer(asyncInitialState, {
      ...asyncCases(CREATEUSER),
    }),
    getuser: createReducer(asyncInitialState, {
      ...asyncCases(GETUSER),
    }),
    addpicture: createReducer(asyncInitialState, {
      ...asyncCases(ADDPICTURE),
    }),
  };