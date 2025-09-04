import axios from 'axios';

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = () => {
  return apiClient.get('/api/categories');
};
