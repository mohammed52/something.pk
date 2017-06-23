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

function updateCardsForBank(data) {
  return {
    type: types.UPDATE_CARDS_FOR_BANK,
    id: data.id,
    newCards: data.cards
  }
}

function destroyCardFromBank(data) {

  return {
    type: types.DESTROY_CARD_FROM_BANK,
    bankId: data.bankId,
    cardName: data.cardName
  }
}

function destroyCardFromBankFailure(data) {
  return {
    type: types.DESTROY_CARD_FROM_BANK_FAILURE,
    bankId: data.bankId,
    cardName: data.cardName,
    error: data.error
  }
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

function updateCardForBankService(bank, cardsArray) {
  return (dispatch) => {

    return banksService().updateBank({
      id: bank.id,
      data: {
        isUpdateCards: true,
        cards: cardsArray
      }
    })
      .then(() => {
        dispatch(updateCardsForBank(bank.id, cardsArray)
        )
      }
    )
      .catch(() => {
        dispatch(createBankFailure({
          id: bank.id,
          error: "Oops, womething went wrong, we couldn't delete the card"
        }))
      }
    )
  };
}

export function addCardToBank(bank, cardName) {
  const cardsArray = bank.cards
  cardsArray.push(cardName)
  bank.cards = cardsArray
  return updateCardForBankService(bank, cardsArray)
}

export function deleteCardFromBank(bank, cardName) {
  console.log("deleteCardFromBank");

  const cardsArray = bank.cards
  console.log("cardsArray", cardsArray);
  console.log("cardName", cardName);
  const index = cardsArray.indexOf(cardName)
  console.log("index", index);

  cardsArray.splice(index, 1)
  console.log("cardsArray", cardsArray);
  bank.cards = cardsArray
  console.log("bank", bank);
  return updateCardForBankService(bank, cardsArray)
}
