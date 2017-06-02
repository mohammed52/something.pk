/* eslint consistent-return: 0, no-else-return: 0*/
import md5 from 'spark-md5';
import * as types from '../types';
// import { voteService } from '../services';

function createBankRequest(data) {
  const MAPLOG = true;
  if (MAPLOG) console.log("createBankRequest");
  return {
    type: types.CREATE_BANK_REQUEST,
    bankFullName: data.bankFullName,
    bankShortName: data.bankShortName
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
    if (text.trim().length <= 0) return;

    const id = md5.hash(text);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const data = {
      id,
      text
    };
    // First dispatch an optimistic update
    dispatch(createBankRequest(data));

    return voteService().createBank({
      id,
      data
    })
      .then((res) => {
        if (res.status === 200) {
          // We can actually dispatch a CREATE_BANK_SUCCESS
          // on success, but I've opted to leave that out
          // since we already did an optimistic update
          // We could return res.json();
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