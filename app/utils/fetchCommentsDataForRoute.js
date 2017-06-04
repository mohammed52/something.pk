const defaultFetchCommentsData = () => Promise.resolve();

function fetchCommentsDataForRoute({routes, params}) {
  const matchedRoute = routes[routes.length - 1];
  const fetchCommentsDataHandler = matchedRoute.fetchCommentsData || defaultFetchCommentsData;
  const MAPLOG = true;
  return fetchCommentsDataHandler(params);
}

export default fetchCommentsDataForRoute;

