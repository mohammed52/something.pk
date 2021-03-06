import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from '../reducers/user';
import topic from '../reducers/topic';
import message from '../reducers/message';
import comment from '../reducers/comment';
import bank from '../reducers/bankReducer';
import restaurant from '../reducers/restaurantReducer';
import city from '../reducers/cityReducer';
import deal from '../reducers/dealReducer';
import * as types from '../types';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
    case types.CREATE_BANK_REQUEST:
    case types.CREATE_CARD_REQUEST:
    case types.CREATE_REQUEST_TOPIC:
    case types.CREATE_RESTAURANT_REQUEST:
    case types.CREATE_DEAL_REQUEST:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_SUCCESS_BANKS:
    case types.REQUEST_SUCCESS_CITIES:
    case types.REQUEST_SUCCESS_RESTAURANTS:
    case types.REQUEST_SUCCESS_DEALS:
    case types.CREATE_BANK_SUCCESS:
    case types.CREATE_CITY_SUCCESS:
    case types.CREATE_DEAL_SUCCESS:
    case types.CREATE_RESTAURANT_FAILURE:
    case types.REQUEST_FAILURE:
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
  bank,
  city,
  restaurant,
  deal
});

export default rootReducer;
