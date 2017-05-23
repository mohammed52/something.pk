import { combineReducers } from 'redux';
import * as types from '../types';

const comment = (state = {},
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const comments = (state = [],
  action
) => {
  console.log("comments reducer");
  switch (action.type) {
    default:
      return state;
  }
};

const newComment = (state = 'try me',
  action
) => {
  console.log("newComment reducer");
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
