import { combineReducers } from 'redux';
import * as types from '../types';

const deal = (state = {},
  action
) => {
  switch (action.type) {

    case types.CREATE_DEAL_REQUEST:
      return {
        id: action.id,
        restaurantId: action.restaurantId,
        bankId: action.bankId,
        cardDeals: action.cardDeals,
        generalDeal: action.generalDeal,
        cities: action.cities,
        expiry: action.expiry,
        comments: action.comments
      };
    case types.UPDATE_DEAL:
      if (state.id === action.id) {
        return {
          ...state,
          cardDeals: action.data.newCardDeals,
          generalDeal: action.data.newGeneralDeal,
          expiry: action.data.newExpiry
        };
      }
      return state;
    case types.default:
    default:
      return state;
  }
};

const deals = (state = [],
  action
) => {

  switch (action.type) {
    case types.REQUEST_SUCCESS_DEALS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_DEAL_REQUEST:
      return [...state, deal(undefined, action)];
    case types.CREATE_DEAL_FAILURE:
      return state.filter(t => t.id !== action.id);
    case types.DESTROY_DEAL:
      const updatedState = state.filter(t => t.id !== action.id)
      return updatedState;
    case types.UPDATE_DEAL:
      return state.map(t => deal(t, action));
    default:
      return state;
  }
};

const dealReducer = combineReducers({
  deals
});

export default dealReducer;
