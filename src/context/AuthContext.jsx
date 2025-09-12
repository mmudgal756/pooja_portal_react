import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { getUserById } from '../services/UserService';
import apiClient from '../services/apiClient.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const token = Cookies.get('accessToken');
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.id; // Assuming 'id' claim holds the user ID
          const userData = await getUserById(userId);
          setUser(userData);
        } catch (error) {
          console.error('Failed to fetch user profile', error);
          Cookies.remove('accessToken');
        }
      }
      setLoading(false);
    };

    checkUser();
  }, []);

  const login = async (email, password) => {
    const payload = { email, password }
    const res = await login(payload);
    const { accessToken } = res;
    Cookies.set('accessToken', accessToken);
    const decodedToken = jwtDecode(accessToken);
    const userId = decodedToken.id; // Assuming 'id' claim holds the user ID
    const userData = await getUserById(userId);
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove('accessToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
