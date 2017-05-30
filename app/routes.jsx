import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { fetchVoteData } from './fetch-data';
import { fetchCommentsData } from './fetch-comments-data';
import { App, ShowDiscountsPage, LoginOrRegisterPage, DashboardPage, EditBanksPage } from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const {user: {authenticated}} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: {
          nextPathname: nextState.location.pathname
        }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const {user: {authenticated}} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  return (
    <Route path="/"
           component={App}>
      <IndexRoute component={ShowDiscountsPage}
                  fetchData={fetchVoteData}
                  fetchCommentsData={fetchCommentsData} />
      <Route path="login"
             component={LoginOrRegisterPage}
             onEnter={redirectAuth} />
      <Route component={DashboardPage}
             onEnter={requireAuth}>
        <Route path="editbanks"
               component={EditBanksPage}
               onEnter={requireAuth} />
      </Route>
    </Route>
  );
};
