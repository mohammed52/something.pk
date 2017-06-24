import { combineReducers } from 'redux';
import * as types from '../types';

const city = (state = {},
  action
) => {
  switch (action.type) {

    case types.CREATE_CITY_REQUEST:
      return {
        id: action.id,
        name: action.name,
        shortCode: action.shortCode
      };
    case types.default:
    default:
      return state;
  }
};

const cities = (state = [],
  action
) => {

  switch (action.type) {
    case types.REQUEST_SUCCESS_CITIES:
      if (action.data) return action.data;
      return state;
    case types.CREATE_CITY_REQUEST:
      return [...state, city(undefined, action)];
    case types.CREATE_CITY_FAILURE:
      return state.filter(t => t.id !== action.id);
    case types.DESTROY_CITY:
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

const cityReducer = combineReducers({
  cities
});

export default cityReducer;
