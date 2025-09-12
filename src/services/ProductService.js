import apiClient from './apiClient';

export const getProducts = () => {
  return apiClient.get('/api/products/category/Products');
};

export const saveProduct = (product) => {
  if (product._id) {
    return apiClient.put(`/api/products/${product._id}`, product);
  } else {
    return apiClient.post('/api/products', product);
  }
};

export const deleteProduct = (id) => {
  return apiClient.delete(`/api/products/${id}`);
};

export const getCategories = () => {
    return apiClient.get('/api/categories');
};
