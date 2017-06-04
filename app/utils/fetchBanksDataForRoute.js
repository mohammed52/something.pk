const defaultFetchBanksData = () => Promise.resolve();

function fetchBanksDataForRoute({routes, params}) {
  const matchedRoute = routes[routes.length - 1];
  const fetchBanksDataHandler = matchedRoute.fetchBanksData || defaultFetchBanksData;
  return fetchBanksDataHandler(params);
}

export default fetchBanksDataForRoute;

