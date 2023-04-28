import { $authHost, $host } from '.';
import jwt_decode from 'jwt-decode';
import { RegistrationForm, AuthForm, User } from '../interfaces/UserInterfaces';

const login = async (user: AuthForm) => {
  const { data } = await $host.post('api/user/login', user);
  localStorage.setItem('token', data.token);
  return jwt_decode<User>(data.token);
};

const registration = async (user: RegistrationForm) => {
  const { data } = await $host.post('api/user/registration', user);
  localStorage.setItem('token', data.token);
  return jwt_decode<User>(data.token);
};

const check = async () => {
  const { data } = await $authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode<User>(data.token);
};

export { login, registration, check };
