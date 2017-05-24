const defaultFetchData = () => Promise.resolve();

function fetchDataForRoute({routes, params}) {
  const matchedRoute = routes[routes.length - 1];
  const fetchDataHandler = matchedRoute.fetchData || defaultFetchData;
  const MAPLOG = true;
  if (MAPLOG) console.log("params", params);
  if (MAPLOG) console.log("routes", routes);
  return fetchDataHandler(params);
}

export default fetchDataForRoute;

