/* eslint consistent-return: 0, no-else-return: 0*/
import md5 from 'spark-md5';
import * as types from '../types';
import { citiesService } from '../services';

function destroy(id) {
  return {
    type: types.DESTROY_CITY,
    id
  };
}

function saveCities(data) {
  return {
    type: types.REQUEST_SUCCESS_CITIES,
    data
  };
}

function createCityRequest(data) {
  const MAPLOG = true;
  if (MAPLOG) console.log("createCityRequest");
  return {
    type: types.CREATE_CITY_REQUEST,
    id: data.id,
    name: data.name,
    shortCode: data.shortCode
  };
}

function createCitySuccess() {
  return {
    type: types.CREATE_CITY_SUCCESS
  };
}

function createCityFailure(data) {
  return {
    type: types.CREATE_CITY_FAILURE,
    id: data.id,
    error: data.error
  };
}

// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createCity(city) {
  const MAPLOG = true;
  if (MAPLOG) console.log("city", city);

  return (dispatch, getState) => {
    if (MAPLOG) console.log("action createCity");
    // If the text box is empty

    if (city.name.trim().length <= 0) return;

    const id = md5.hash(city.name);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const data = {
      id: id,
      name: city.name,
      shortCode: city.shortCode
    };
    if (MAPLOG) console.log("data", data);


    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters

    // First dispatch an optimistic update
    dispatch(createCityRequest(data));

    return citiesService().createCity({
      id,
      data
    })
      .then((res) => {
        if (res.status === 200) {
          if (MAPLOG) console.log("response successfull");
          return dispatch(createCitySuccess());
        }
      })
      .catch(() => {
        return dispatch(createCityFailure({
          id,
          error: 'Oops! Something went wrong and we couldn\'t create your comment'
        }));
      });
  };
}

export function destroyCity(id) {
  console.log("destroyCity");
  return (dispatch) => {
    return citiesService().deleteCity({
      id
    })
      .then(() => dispatch(destroy(id)))
      .catch(() => dispatch(createCityFailure({
        id,
        error: 'Oops! Something went wrong and we couldn\'t add your vote'
      })));
  };
}

export function getCities() {
  console.log("getCities");
  return (dispatch) => {

    return citiesService().getCities()
      .then(res => {
        console.log("catchingError");
        return dispatch(saveCities(res.data))
      })
      // Returning [] as a placeholder now so it does not error out when this service
      // fails. We should be handling this in our DISPATCH_REQUEST_FAILURE
      .catch(() => {
        console.log("catchingError");
        dispatch(createCityFailure({
          error: 'Oops! Something went wrong and we couldn\'t get the cities'
        }))
      }
    );
  }
}
