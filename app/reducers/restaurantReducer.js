import { combineReducers } from 'redux';
import * as types from '../types';

const restaurant = (state = {},
  action
) => {
  switch (action.type) {

    case types.CREATE_RESTAURANT_REQUEST:
      return {
        id: action.id,
        name: action.fullName,
        logoUrl: action.logoUrl,
      };
    case types.default:
    default:
      return state;

  }
};

const restaurants = (state = [],
  action
) => {

  switch (action.type) {
    case types.REQUEST_SUCCESS_RESTAURANTS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_RESTAURANT_REQUEST:
      return [...state, restaurant(undefined, action)];
    case types.CREATE_RESTAURANT_FAILURE:
      return state.filter(t => t.id !== action.id);
    case types.DESTROY_RESTAURANT:
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

const restaurantReducer = combineReducers({
  restaurants
});

export default restaurantReducer;
