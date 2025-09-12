import apiClient from './apiClient';

export const getAnusthans = async () => {
  const { data } = await apiClient.get('/api/products/category/Anusthans');
  return data;
};
