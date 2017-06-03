import { banksService } from '../services';

const fetchBanksData = () => {
  const MAPLOG = true;
  if (MAPLOG) console.log("fetchBanksData");
  return banksService().getBanks()
    .then(res => {
      const MAPLOG = true;
      if (MAPLOG) console.log("res.data", res.data);
      return res.data
    })
    // Returning [] as a placeholder now so it does not error out when this service
    // fails. We should be handling this in our DISPATCH_REQUEST_FAILURE
    .catch(() => []);
};

export default fetchBanksData;

