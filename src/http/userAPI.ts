import { $host } from '.';
import jwt_decode from 'jwt-decode';
import { LoginResponse } from '../interfaces/ResponseInterfaces';
import { User, PotentialUser } from '../interfaces/UserInterfaces';



const login = async ( user: PotentialUser ) => {
  const { data }: LoginResponse = await $host.post('auth/login', user);
  localStorage.setItem('token', data.token);
  return jwt_decode<User>(data.token);
};

const registration = async ( user: PotentialUser ) => {
  const { data }: LoginResponse = await $host.post('auth/registration', user);
  localStorage.setItem('token', data.token);
  return jwt_decode<User>(data.token);
};

export {
  login, registration,
};