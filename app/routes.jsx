import React from 'react';
import { Route, IndexRoute } from 'react-router'
import { fetchVoteData, fetchBanksData, fetchCitiesData, fetchRestaurantsData } from './fetch-data'
import { DealsPage, RestaurantsPage, CitiesPage, CardsPage, BanksPage, App, HomePage, LoginOrRegisterPage, DashboardPage, WrapperLoggedInPage } from './pages';
import { getCities } from './actions/citiesActions';

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
    getCities()

  };

  return (
    <Route path="/"
           component={App}>
      <IndexRoute component={HomePage}
                  fetchData={fetchBanksData} />
      <Route path="login"
             component={LoginOrRegisterPage}
             onEnter={redirectAuth} />
      <Route component={WrapperLoggedInPage}
             onEnter={requireAuth}>
        <Route path="dashboard"
               component={DashboardPage} />
        <Route path="banks"
               component={BanksPage}
               fetchData={fetchBanksData} />
        <Route path="cards"
               component={CardsPage}
               fetchData={fetchBanksData} />
        <Route path="cities"
               component={CitiesPage}
               fetchData={fetchCitiesData} />
        <Route path="restaurants"
               component={RestaurantsPage}
               fetchData={fetchRestaurantsData} />
        <Route path="deals"
               component={DealsPage}
               onEnter={testFn}
               fetchData={fetchBanksData} />
      </Route>
    </Route>
  );
};
