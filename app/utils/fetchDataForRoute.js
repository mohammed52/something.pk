const defaultFetchData = () => Promise.resolve();

function fetchDataForRoute({routes, params}) {
  const matchedRoute = routes[routes.length - 1];
  const MAPLOG = true;
  if (MAPLOG) console.log("matchedRoute", matchedRoute);
  const fetchDataHandler = matchedRoute.fetchData || defaultFetchData;
  return fetchDataHandler(params);
}

export default fetchDataForRoute;

