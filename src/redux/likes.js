import {
    domain,
    jsonHeaders,
    handleJsonResponse,
    asyncInitialState,
    asyncCases,
    createReducer,
    createActions,
} from "./helpers"
import { getmessages } from "./messages"

const url = domain + "/likes"

const DELETELIKES = createActions("deleteLike");
const deleteLike = likeId => (dispatch, getState) => {
    dispatch(DELETELIKES.START());

    const token = getState().auth.login.result.token;

    return fetch(url + "/" + likeId, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    })
        .then(handleJsonResponse)
        .then(result => dispatch(DELETELIKES.SUCCESS(result)))
        .catch(err => Promise.reject(dispatch(DELETELIKES.FAIL(err))))
};

const ADDLIKES = createActions("addLike");
const addLike = messageId => (dispatch, getState) => {
    console.log("added a like!");
    dispatch(ADDLIKES.START());

    const token = getState().auth.login.result.token
    console.log(messageId)
    return fetch(url, {
        method: "POST",
        headers: { Authorization: "Bearer " + token, ...jsonHeaders },
        body: JSON.stringify({ messageId: messageId })
    })
        .then(handleJsonResponse)
        .then(result => dispatch(ADDLIKES.SUCCESS(result)))
        .catch(err => Promise.reject(dispatch(ADDLIKES.FAIL(err))))
};


export const toggleLike = (likes, messageId) => (dispatch, getState) => {
    const username = getState().auth.login.result.username

    likes = likes.filter(like => like.username === username)
    if (likes.length > 0) {
        dispatch(deleteLike(likes[0].id)).then(() => dispatch(getmessages()))
    } else {
        dispatch(addLike(messageId)).then(() => dispatch(getmessages()))
    }

}
export const reducers = {
    addLikes: createReducer(asyncInitialState, {
        ...asyncCases(ADDLIKES),
    }),
    deleteLikes: createReducer(asyncInitialState, {
        ...asyncCases(DELETELIKES),
    })
};