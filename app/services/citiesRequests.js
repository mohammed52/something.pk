import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint
  });
  return {
    getCities: () => client.request({
      method: 'GET',
      url: '/city'
    }),
    deleteCity: ({id}) => client.request({
      method: 'DELETE',
      url: `/city/${id}`
    }),
    updateCity: ({id, data}) => client.request({
      method: 'PUT',
      url: `/city/${id}`,
      data
    }),
    createCity: ({id, data}) => client.request({
      method: 'POST',
      url: `/city/${id}`,
      data
    }),
  };
};

