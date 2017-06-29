import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint
  });
  return {
    getRestaurants: () => client.request({
      method: 'GET',
      url: '/restaurant'
    }),
    deleteRestaurant: ({id}) => client.request({
      method: 'DELETE',
      url: `/restaurant/${id}`
    }),
    updateRestaurant: ({id, data}) => client.request({
      method: 'PUT',
      url: `/restaurant/${id}`,
      data
    }),
    createRestaurant: ({id, data}) => client.request({
      method: 'POST',
      url: `/restaurant/${id}`,
      data
    }),
  };
};

