import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint
  });
  return {
    getDeals: () => client.request({
      method: 'GET',
      url: '/deal'
    }),
    deleteDeal: ({id}) => client.request({
      method: 'DELETE',
      url: `/deal/${id}`
    }),
    updateDeal: ({id, data}) => client.request({
      method: 'PUT',
      url: `/deal/${id}`,
      data
    }),
    createDeal: ({id, data}) => client.request({
      method: 'POST',
      url: `/deal/${id}`,
      data
    }),
  };
};

