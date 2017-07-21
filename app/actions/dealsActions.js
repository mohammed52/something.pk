/* eslint consistent-return: 0, no-else-return: 0*/
import md5 from 'spark-md5';
import * as types from '../types';
import { dealsService } from '../services';


function destroy(id) {
  return {
    type: types.DESTROY_DEAL,
    id
  };
}

function createDealRequest(data) {
  const MAPLOG = true;
  if (MAPLOG) console.log("createDealRequest");
  return {
    type: types.CREATE_DEAL_REQUEST,
    id: data.id,
    restaurantId: data.restaurantId,
    bankId: data.bankId,
    cardDeals: data.cardDeals,
    generalDeal: data.generalDeal,
    expiry: data.expiry,
    comments: data.comments
  };
}

function createDealSuccess() {
  return {
    type: types.CREATE_DEAL_SUCCESS
  };
}

function createDealFailure(data) {
  return {
    type: types.CREATE_DEAL_FAILURE,
    id: data.id,
    error: data.error
  };
}


// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createDeal(deal) {
  const MAPLOG = true;
  if (MAPLOG) console.log("deal", deal);

  return (dispatch, getState) => {
    if (MAPLOG) console.log("action createDeal");
    // If the text box is empty

    const dealIdText = deal.restaurantName + deal.bankName + deal.comments

    if (dealIdText.trim().length <= 0) return;

    const id = md5.hash(dealIdText);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const data = {

      id: id,
      restaurantId: deal.restaurantId,
      bankId: deal.bankId,
      cardDeals: deal.cardDeals,
      generalDeal: deal.generalDeal,
      expiry: deal.expiry,
      comments: deal.comments
    };
    if (MAPLOG) console.log("data", data);


    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters

    // First dispatch an optimistic update
    dispatch(createDealRequest(data));

  // return dealsService().createDeal({
  //   id,
  //   data
  // })
  //   .then((res) => {
  //     if (res.status === 200) {
  //       if (MAPLOG) console.log("response successfull");
  //       return dispatch(createDealSuccess());
  //     }
  //   })
  //   .catch(() => {
  //     return dispatch(createDealFailure({
  //       id,
  //       error: 'Oops! Something went wrong and we couldn\'t create your deal'
  //     }));
  //   });
  };
}

export function destroyDeal(id) {
  return (dispatch) => {
    return dealsService().deleteDeal({
      id
    })
      .then(() => dispatch(destroy(id)))
      .catch(() => dispatch(createDealFailure({
        id,
        error: 'Oops! Something went wrong and we couldn\'t add your vote'
      })));
  };
}
