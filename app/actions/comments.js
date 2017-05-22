/* eslint consistent-return: 0, no-else-return: 0*/
import md5 from 'spark-md5';
import * as types from '../types';
import { voteService } from '../services';

function destroy(id) {
  return {
    type: types.DESTROY_COMMENT,
    id
  };
}

function createCommentRequest(data) {
  return {
    type: types.CREATE_COMMENT_REQUEST,
    id: data.id,
    text: data.text
  };
}

function createCommentSuccess() {
  return {
    type: types.CREATE_COMMENT_SUCCESS
  };
}

function createCommentFailure(data) {
  return {
    type: types.CREATE_COMMENT_FAILURE,
    id: data.id,
    error: data.error
  };
}

export function commentTyping(text) {
  return {
    type: types.TYPING_COMMENT,
    newComment: text
  };
}

// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createComment(text) {
  return (dispatch, getState) => {
    // If the text box is empty
    if (text.trim().length <= 0) return;

    const id = md5.hash(text);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const data = {
      id,
      text
    };

    // First dispatch an optimistic update
    dispatch(createCommentRequest(data));

    return voteService().createComment({
      id,
      data
    })
      .then((res) => {
        if (res.status === 200) {
          // We can actually dispatch a CREATE_COMMENT_SUCCESS
          // on success, but I've opted to leave that out
          // since we already did an optimistic update
          // We could return res.json();
          return dispatch(createCommentSuccess());
        }
      })
      .catch(() => {
        return dispatch(createCommentFailure({
          id,
          error: 'Oops! Something went wrong and we couldn\'t create your comment'
        }));
      });
  };
}

export function destroyComment(id) {
  return (dispatch) => {
    return voteService().deleteComment({
      id
    })
      .then(() => dispatch(destroy(id)))
      .catch(() => dispatch(createCommentFailure({
        id,
        error: 'Oops! Something went wrong and we couldn\'t add your vote'
      })));
  };
}
