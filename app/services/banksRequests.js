import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint
  });
  return {
    getBanks: () => client.request({
      method: 'GET',
      url: '/topic'
    }),
    deleteBank: ({id}) => client.request({
      method: 'DELETE',
      url: `/topic/${id}`
    }),
    updateBank: ({id, data}) => client.request({
      method: 'PUT',
      url: `/topic/${id}`,
      data
    }),
    createBank: ({id, data}) => client.request({
      method: 'POST',
      url: `/topic/${id}`,
      data
    }),
  };
};

