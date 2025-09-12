import apiClient from './apiClient';

export const getProducts = async () => {
  const { data } = await apiClient.get('/api/products/category/Products');
  return data;
};
