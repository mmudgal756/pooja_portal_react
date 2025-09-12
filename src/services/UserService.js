import Cookies from 'js-cookie';
import apiClient from './apiClient';

const getAuthHeader = () => {
  const token = Cookies.get('accessToken');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

export const getUserById = async (id) => {
  const headers = getAuthHeader();
  const response  = await apiClient.get(`api/users/${id}`, { headers });
  return response.data;
};


export const login = async (payload) => {
  const response  = await apiClient.post(`api/users/login`,payload);
  return response.data;
};

export const register = async (payload) => {
  const response  = await apiClient.post(`api/users/register`,payload);
  return response.data;
};