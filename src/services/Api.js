import { create } from 'axios';
import { store } from '../App';
import { reset } from "../reducers/authReducer";
const api = create({
  baseURL: process.env.REACT_APP_API_KEY,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  timeout: 30000,
});

api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = localStorage.getItem('token');
  return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
});

api.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    store.dispatch(reset());
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return Promise.reject(error.response);
});

export default api;