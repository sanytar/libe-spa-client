import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://localhost:3000/',
});

const $authHost = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000/',
});

$authHost.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export { $host, $authHost };
