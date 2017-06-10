import React from 'react';
import { Route, IndexRoute } from 'react-router'
import { fetchVoteData, fetchBanksData } from './fetch-data'
import { fetchCommentsData } from './fetch-comments-data';
import { CardsPage, BanksPage, App, ShowDiscountsPage, LoginOrRegisterPage, DashboardPage, WrapperLoggedInPage } from './pages';

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
        pathname: '/dashboard'
      });
    }
    callback();
  };

  const testFn = () => {
    const MAPLOG = true;
    if (MAPLOG) console.log("testfn");

  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={ShowDiscountsPage} fetchData={fetchVoteData} fetchCommentsData={fetchCommentsData} />
      <Route path="login" component={LoginOrRegisterPage} onEnter={redirectAuth} />
      <Route component={WrapperLoggedInPage} onEnter={requireAuth}>
        <Route path="dashboard"
               component={DashboardPage}
               onEnter={testFn}
               fetchData={fetchVoteData} />
        <Route path="banks"
               component={BanksPage}
               onEnter={testFn}
               fetchData={fetchBanksData} />
        <Route path="cards" component={CardsPage} />
      </Route>
    </Route>
    );
};
