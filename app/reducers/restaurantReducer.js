import { combineReducers } from 'redux';
import * as types from '../types';

const restaurant = (state = {},
  action
) => {
  switch (action.type) {

    case types.CREATE_RESTAURANT_REQUEST:
      return {
        id: action.id,
        name: action.name,
        logoUrl: action.logoUrl,
      };
    case types.UPDATE_RESTAURANT:
      if (state.id === action.id) {
        return {
          ...state,
          logoUrl: action.data.newLogoUrl
        };
      }
      return state;
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
    case types.UPDATE_RESTAURANT:
      return state.map(t => restaurant(t, action));
    default:
      return state;
  }
};

const restaurantReducer = combineReducers({
  restaurants
});

export default restaurantReducer;
