import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { fetchVoteData } from './fetch-data';
import { fetchBanksData } from './fetch-banks-data'
import { fetchCommentsData } from './fetch-comments-data';
import { BanksPage, App, ShowDiscountsPage, LoginOrRegisterPage, DashboardPage, EditBanksPage, WrapperLoggedInPage } from './pages';

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
      console.log("try me");
      replace({
        pathname: '/dashboard'
      });
    }
    callback();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={ShowDiscountsPage} fetchData={fetchVoteData} fetchCommentsData={fetchCommentsData} />
      <Route path="login" component={LoginOrRegisterPage} onEnter={redirectAuth} />
      <Route component={WrapperLoggedInPage} onEnter={requireAuth}>
        <Route path="editbanks"
               fetchBanksData={fetchBanksData}
               component={EditBanksPage}
               onEnter={requireAuth} />
        <Route path="dashboard" component={DashboardPage} onEnter={requireAuth} />
        <Route path="banks" component={BanksPage} onEnter={requireAuth} />
      </Route>
    </Route>
    );
};
