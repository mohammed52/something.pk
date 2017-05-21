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
  switch (action.type) {
    default:
      return state;
  }
};

const commentReducer = combineReducers({
  comments
});

export default commentReducer;
