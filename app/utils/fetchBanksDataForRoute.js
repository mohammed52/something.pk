const defaultFetchBanksData = () => Promise.resolve();

function fetchBanksDataForRoute({routes, params}) {
  const matchedRoute = routes[routes.length - 1];
  const fetchBanksDataHandler = matchedRoute.fetchBanksData || defaultFetchBanksData;
  const MAPLOG = true;
  if (MAPLOG) console.log("params", params);
  if (MAPLOG) console.log("routes", routes);
  return fetchBanksDataHandler(params);
}

export default fetchBanksDataForRoute;

