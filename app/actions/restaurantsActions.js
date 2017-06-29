/* eslint consistent-return: 0, no-else-return: 0*/
import md5 from 'spark-md5';
import * as types from '../types';
import { restaurantsService } from '../services';


function destroy(id) {
  return {
    type: types.DESTROY_RESTAURANT,
    id
  };
}

function createRestaurantRequest(data) {
  const MAPLOG = true;
  if (MAPLOG) console.log("createRestaurantRequest");
  return {
    type: types.CREATE_RESTAURANT_REQUEST,
    id: data.id,
    name: data.name,
    logoUrl: data.logoUrl,
  };
}

function createRestaurantSuccess() {
  return {
    type: types.CREATE_RESTAURANT_SUCCESS
  };
}

function createRestaurantFailure(data) {
  return {
    type: types.CREATE_RESTAURANT_FAILURE,
    id: data.id,
    error: data.error
  };
}


// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createRestaurant(restaurant) {
  const MAPLOG = true;
  if (MAPLOG) console.log("restaurant", restaurant);

  return (dispatch, getState) => {
    if (MAPLOG) console.log("action createRestaurant");
    // If the text box is empty

    if (restaurant.name.trim().length <= 0) return;

    const id = md5.hash(restaurant.name);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const data = {
      id: id,
      name: restaurant.name,
      logoUrl: restaurant.logoUrl,
    };
    if (MAPLOG) console.log("data", data);


    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters

    // First dispatch an optimistic update
    dispatch(createRestaurantRequest(data));

    return restaurantsService().createRestaurant({
      id,
      data
    })
      .then((res) => {
        if (res.status === 200) {
          if (MAPLOG) console.log("response successfull");
          return dispatch(createRestaurantSuccess());
        }
      })
      .catch(() => {
        return dispatch(createRestaurantFailure({
          id,
          error: 'Oops! Something went wrong and we couldn\'t create your comment'
        }));
      });
  };
}

export function destroyRestaurant(id) {
  return (dispatch) => {
    return restaurantsService().deleteRestaurant({
      id
    })
      .then(() => dispatch(destroy(id)))
      .catch(() => dispatch(createRestaurantFailure({
        id,
        error: 'Oops! Something went wrong and we couldn\'t add your vote'
      })));
  };
}



