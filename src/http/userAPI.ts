import { $host } from '.';
import jwt_decode from 'jwt-decode';

interface User {
  email: string;
  password: string;
}

const login = async ( user: User ) => {
  const { data } = await $host.post('auth/login', user);
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

const registration = async ( user: User ) => {
  const { data } = await $host.post('auth/registration', user);
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export {
  login, registration,
};