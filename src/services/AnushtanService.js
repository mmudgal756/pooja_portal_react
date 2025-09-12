import apiClient from './apiClient';

export const getAnushtans = () => {
  return apiClient.get('/api/products/category/Anusthans');
};

export const saveAnushtan = (anushtan) => {
  if (anushtan._id) {
    return apiClient.put(`/api/products/${anushtan._id}`, anushtan);
  } else {
    return apiClient.post('/api/products', anushtan);
  }
};

export const deleteAnushtan = (id) => {
  return apiClient.delete(`/api/products/${id}`);
};

export const getCategories = () => {
    return apiClient.get('/api/categories');
};
