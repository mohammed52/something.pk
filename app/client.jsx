import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'bootstrap/dist/js/bootstrap.min.js';

import createRoutes from './routes';
import * as types from './types';
import configureStore from './store/configureStore';
import fetchDataForRoute from './utils/fetchDataForRoute';


// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
// Grab the state from a global injected into
// server-generated HTML
const initialState = window.__INITIAL_STATE__;

require('dotenv').config()

const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

/**
 * Callback function handling frontend route changes.
 */
function onUpdate() {
  // Prevent duplicate fetches when first loaded.
  // Explanation: On server-side render, we already have __INITIAL_STATE__
  // So when the client side onUpdate kicks in, we do not need to fetch twice.
  // We set it to null so that every subsequent client-side navigation will
  // still trigger a fetch data.
  // Read more: https://github.com/choonkending/react-webpack-node/pull/203#discussion_r60839356
  const MAPLOG = true;
  if (window.__INITIAL_STATE__ !== null) {
    window.__INITIAL_STATE__ = null;
    return;
  }

  store.dispatch({
    type: types.CREATE_REQUEST
  });

  fetchDataForRoute(this.state)
    .then((data) => {
      switch (this.state.location.pathname) {
        case ( "/"): {

        }
        case ( '/dashboard'): {
          return
        }
        case ( '/banks'): {
          return store.dispatch({
            type: types.REQUEST_SUCCESS_BANKS,
            data
          });
        }
        case ( '/cards'): {
          return store.dispatch({
            type: types.REQUEST_SUCCESS_BANKS,
            data
          });
        }
        case ( '/cities'): {
          return store.dispatch({
            type: types.REQUEST_SUCCESS_CITIES,
            data
          });
        }
        case ( '/restaurants'): {
          return store.dispatch({
            type: types.REQUEST_SUCCESS_RESTAURANTS,
            data
          });
        }
        case ( '/deals'): {
          return store.dispatch({
            type: types.REQUEST_SUCCESS_BANKS,
            data
          });
        }
        default: {
          return store.dispatch({
            type: types.REQUEST_SUCCESS_TOPIC,
            data
          });
        }
      }


    }).catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
}


// Router converts <Route> element hierarchy to a route config:
// Read more https://github.com/rackt/react-router/blob/latest/docs/Glossary.md#routeconfig
render(
  <Provider store={store}>
    <Router history={history}
            onUpdate={onUpdate}>
      {routes}
    </Router>
  </Provider>, document.getElementById('app'));
