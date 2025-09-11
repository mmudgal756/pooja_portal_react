import apiClient from './apiClient';

export const getPujaServices = async () => {
  const { data } = await apiClient.get('/products/category/Anusthans');
  return data;
};
