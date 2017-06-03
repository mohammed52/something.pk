import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint
  });
  return {
    getBanks: () => client.request({
      method: 'GET',
      url: '/bank'
    }),
    deleteBank: ({id}) => client.request({
      method: 'DELETE',
      url: `/bank/${id}`
    }),
    updateBank: ({id, data}) => client.request({
      method: 'PUT',
      url: `/bank/${id}`,
      data
    }),
    createBank: ({id, data}) => client.request({
      method: 'POST',
      url: `/bank/${id}`,
      data
    }),
  };
};

