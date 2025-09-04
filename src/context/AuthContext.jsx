import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { getUserById } from '../services/UserService';

export const AuthContext = createContext();

const API_URL = 'http://localhost:3000';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const token = Cookies.get('accessToken');
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.sub; // Assuming 'sub' claim holds the user ID
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
    const res = await axios.post(`${API_URL}/login`, { email, password });
    const { accessToken } = res.data;
    Cookies.set('accessToken', accessToken);
    const decodedToken = jwtDecode(accessToken);
    const userId = decodedToken.sub; // Assuming 'sub' claim holds the user ID
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
