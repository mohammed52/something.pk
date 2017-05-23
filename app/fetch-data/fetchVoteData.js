import { voteService } from '../services';

const fetchData = () => {
  const MAPLOG = true;
  if (MAPLOG) console.log("fetchData");
  return voteService().getTopics()
    .then(res => res.data)
    // Returning [] as a placeholder now so it does not error out when this service
    // fails. We should be handling this in our DISPATCH_REQUEST_FAILURE
    .catch(() => []);
};

export default fetchData;

