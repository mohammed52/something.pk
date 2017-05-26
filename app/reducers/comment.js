import { combineReducers } from 'redux';
import * as types from '../types';

const comment = (state = {},
  action
) => {
  switch (action.type) {
    case types.CREATE_COMMENT_REQUEST:
      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
};

const comments = (state = [],
  action
) => {
  switch (action.type) {
    case types.CREATE_COMMENT_REQUEST:
      return [...state, comment(undefined, action)];
    case types.CREATE_COMMENT_FAILURE:
      return state.filter(t => t.id !== action.id);
    case types.CREATE_COMMENT_FAILURE:
      return state.filter(t => t.id !== action.id);
    case types.REQUEST_SUCCESS_COMMENTS:
      if (action.data) return action.data;
      return state;
    default:
      return state;
  }
};

const newComment = (state = 'try me',
  action
) => {

  switch (action.type) {

    case types.TYPING_COMMENT:
      return action.newComment;
    case types.CREATE_COMMENT_REQUEST:
      return '';
    default:
      return state;
  }
};

const commentReducer = combineReducers({
  comments,
  newComment
});

export default commentReducer;
