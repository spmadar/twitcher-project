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
// import authWrapper from "redux-auth-wrapper/authWrapper";
  
  const url = domain + "/messages";
  
  const CREATEPOST = createActions("createpost");
  const _createpost = messagetext => (dispatch, getState) => {
    dispatch(CREATEPOST.START());
  
    const token = getState().auth.login.result.token;
   // console.log(token)
    console.log(messagetext)

    return fetch(url, {
      method: "POST",
      headers: { Authorization: "Bearer " + token, ...jsonHeaders },
      body: JSON.stringify({text: messagetext})
    })
      .then(handleJsonResponse)
      .then(result => dispatch(CREATEPOST.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(CREATEPOST.FAIL(err))));
  };
  export const createpost = messagetext => (dispatch) => {
    dispatch(_createpost(messagetext))
    .then(() => dispatch(getmessages()))
  }


  const GETMESSAGES = createActions("getmessages");
  export const getmessages = messageData => dispatch => {
      dispatch(GETMESSAGES.START());

      return fetch(url, {
          method: "GET",
          headers: jsonHeaders,
          // body: JSON.stringify(messageData)
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
    getmessages: createReducer(asyncInitialState, {
        ...asyncCases(GETMESSAGES),
  })
}
