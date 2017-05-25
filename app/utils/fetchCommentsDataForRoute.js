const defaultFetchCommentsData = () => Promise.resolve();

function fetchCommentsDataForRoute({routes, params}) {
  const matchedRoute = routes[routes.length - 1];
  const fetchCommentsDataHandler = matchedRoute.fetchCommentsData || defaultFetchCommentsData;
  const MAPLOG = true;
  if (MAPLOG) console.log("params", params);
  if (MAPLOG) console.log("routes", routes);
  return fetchCommentsDataHandler(params);
}

export default fetchCommentsDataForRoute;

