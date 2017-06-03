/* eslint consistent-return: 0, no-else-return: 0*/
import md5 from 'spark-md5';
import * as types from '../types';
import { banksService } from '../services';

function createBankRequest(data) {
  const MAPLOG = true;
  if (MAPLOG) console.log("createBankRequest");
  return {
    type: types.CREATE_BANK_REQUEST,
    id: data.id,
    bankFullName: data.bankFullName,
    bankShortName: data.bankShortName,
    bankLogoUrl: data.bankLogoUrl
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

  return (dispatch, getState) => {
    const MAPLOG = true;
    if (MAPLOG) console.log("action createBank");
    // If the text box is empty

    if (bank.bankFullName.trim().length <= 0) return;

    const id = md5.hash(bank.bankFullName);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const data = {
      id: id,
      fullName: bank.bankFullName,
      shortName: bank.bankShortName,
      logoUrl: bank.bankLogoUrl
    };
    if (MAPLOG) console.log("data", data);


    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters

    // First dispatch an optimistic update
    return dispatch(createBankRequest(data));

    return banksService().createBank({
      id,
      data
    })
      .then((res) => {
        if (res.status === 200) {

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