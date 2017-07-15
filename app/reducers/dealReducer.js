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
        restaurantName: action.restaurantName,
        bankId: action.bankId,
        bankName: action.bankName,
        cardDeals: action.cardDeals,
        generalDeal: action.generalDeal,
        expiry: action.expiry,
        comments: action.comments
      };
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
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

const dealReducer = combineReducers({
  deals
});

export default dealReducer;
