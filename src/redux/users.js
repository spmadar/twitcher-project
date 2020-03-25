import {
    domain,
    jsonHeaders,
    handleJsonResponse,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer
  } from "./helpers";
  import { login } from "./auth"
  const url = domain + "/users";
  
  const CREATEUSER = createActions("createuser");
  
  const _createUser = userData => dispatch => {
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
  export const createUser = userData => dispatch => {
    dispatch(_createUser(userData)).then(()=> dispatch(login({username:userData.username, password:userData.password})))
  }

  
  export const reducers = {
    createUser: createReducer(asyncInitialState,{
      ...asyncCases(CREATEUSER),
      [CREATEUSER.SUCCESS.toString()]: (state, action) => asyncInitialState
    }),
    // logout: createReducer(asyncInitialState, {
    //   ...asyncCases(LOGOUT)
    // })
  };