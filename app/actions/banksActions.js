/* eslint consistent-return: 0, no-else-return: 0*/
import md5 from 'spark-md5';
import * as types from '../types';
import { banksService } from '../services';


function destroy(id) {
  return {
    type: types.DESTROY_BANK,
    id
  };
}

function createBankRequest(data) {
  const MAPLOG = true;
  if (MAPLOG) console.log("createBankRequest");
  return {
    type: types.CREATE_BANK_REQUEST,
    id: data.id,
    fullName: data.fullName,
    shortName: data.shortName,
    logoUrl: data.logoUrl,
    cards: data.cards
  };
}

function createBankSuccess() {
  return {
    type: types.CREATE_BANK_SUCCESS
  };
}

function createBankFailure(data) {
  return {
    type: types.CREATE_BANK_FAILURE,
    id: data.id,
    error: data.error
  };
}

// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createBank(bank) {
  const MAPLOG = true;
  if (MAPLOG) console.log("bank", bank);

  return (dispatch, getState) => {
    if (MAPLOG) console.log("action createBank");
    // If the text box is empty

    if (bank.fullName.trim().length <= 0) return;

    const id = md5.hash(bank.fullName);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const data = {
      id: id,
      fullName: bank.fullName,
      shortName: bank.shortName,
      logoUrl: bank.logoUrl,
      cards: bank.cards
    };
    if (MAPLOG) console.log("data", data);


    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters

    // First dispatch an optimistic update
    dispatch(createBankRequest(data));

    return banksService().createBank({
      id,
      data
    })
      .then((res) => {
        if (res.status === 200) {
          if (MAPLOG) console.log("response successfull");
          return dispatch(createBankSuccess());
        }
      })
      .catch(() => {
        return dispatch(createBankFailure({
          id,
          error: 'Oops! Something went wrong and we couldn\'t create your comment'
        }));
      });
  };
}

export function destroyBank(id) {
  return (dispatch) => {
    return banksService().deleteBank({
      id
    })
      .then(() => dispatch(destroy(id)))
      .catch(() => dispatch(createBankFailure({
        id,
        error: 'Oops! Something went wrong and we couldn\'t add your vote'
      })));
  };
}

export function addCardToBank(bankId, cardName) {
  console.log("addCardToBank");
  return
}

export function deleteCardFromBank(bankId, cardName) {
  console.log("deleteCardFromBank");
  return (dispatch) => {
    return banksService().deleteCardFromBank(
    {
      bankId, cardName
    })
    .then(() => dispatch(destroyCardFromBank())
      .catch(() => dispatch(destroyCardFromBankFailure({
        bankId,
        cardName,
        error: "Oops, womething went wrong, we couldn't delete the card"
      })))
  };
}