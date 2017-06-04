import { combineReducers } from 'redux';
import * as types from '../types';

const bank = (state = {},
  action
) => {
  switch (action.type) {

    case types.CREATE_BANK_REQUEST:
      return {
        id: action.id,
        fullName: action.fullName,
        shortName: action.shortName,
        logoUrl: action.logoUrl
      };
    default:
      return state;
  }
};

const banks = (state = [],
  action
) => {

  switch (action.type) {
    case types.REQUEST_SUCCESS_BANKS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_BANK_REQUEST:
      return [...state, bank(undefined, action)];
    case types.CREATE_BANK_FAILURE:
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

const bankReducer = combineReducers({
  banks
});

export default bankReducer;
