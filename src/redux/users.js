import {
    domain,
    jsonHeaders,
    handleJsonResponse,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer
  } from "./helpers";
  import {push} from "connected-react-router";

  
  const url = domain + "/users";
  
  const CREATEUSER = createActions("createuser");
  
  export const Create_User = (username, displayName, password) => (dispatch, getState) => {
    dispatch(CREATEUSER.START());
    console.log(username, displayName, password);
    return fetch(url, {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify({"username" : username, "displayName": displayName, "password" : password})
    })

      .then(handleJsonResponse)
      .then(result => dispatch(CREATEUSER.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(CREATEUSER.FAIL(err))));
  };
  export const createuser = (username, displayName, password) => (dispatch, getState) =>{
    return dispatch(Create_User(username, displayName, password)).then(() => {
        dispatch(push("/"))
    })
  };
  

  const GETUSER = createActions("getuser");
  export const getuser = userData => dispatch => {
    dispatch(GETUSER.START());

    return fetch(url + "/" + userData, {
      method: "GET",
      // headers: jsonHeaders
    })
      .then(handleJsonResponse)
      .then(result => dispatch(GETUSER.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(GETUSER.FAIL(err))));
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