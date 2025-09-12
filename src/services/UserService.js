import axios from 'axios';
import Cookies from 'js-cookie';

const getAuthHeader = () => {
  const token = Cookies.get('accessToken');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

export const getUserById = async (id) => {
  const headers = getAuthHeader();
  const response = await axios.get(`api/users/${id}`, { headers });
  return response.data;
};
