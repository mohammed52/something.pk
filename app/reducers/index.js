import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from '../reducers/user';
import topic from '../reducers/topic';
import message from '../reducers/message';
import comment from '../reducers/comment';
import bank from '../reducers/bankReducer';
import * as types from '../types';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
    case types.CREATE_BANK_REQUEST:
    case types.CREATE_REQUEST_TOPIC:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_SUCCESS_BANKS:
    case types.REQUEST_FAILURE:
    case types.CREATE_BANK_SUCCESS:
      return false;
    default:
      return state;
  }
};

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  isFetching,
  topic,
  user,
  message,
  routing,
  comment,
  bank
});

export default rootReducer;
