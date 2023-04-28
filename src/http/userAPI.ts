import jwt_decode from 'jwt-decode';
import { RegistrationForm, AuthForm, User } from '../interfaces/UserInterfaces';
import { getFetch, postFetch } from '.';

const saveUser = async (response: Response) => {
  const result = await response.json();
  localStorage.setItem('token', result.token);
  return jwt_decode<User>(result.token);
};

const login = async (user: AuthForm) => {
  const response = await postFetch('api/user/login', user);
  if (response.status === 200) {
    return await saveUser(response);
  } else {
    const result = await response.json();
    throw result.message;
  };
};

const registration = async (user: RegistrationForm) => {
  const response = await postFetch('api/user/registration', user);
  if (response.status === 200) {
    return await saveUser(response);
  } else {
    const result = await response.json();
    throw result.message;
  };
};

const check = async () => {
  const response = await getFetch('api/user/auth');
  if (response.status === 200) {
    return await saveUser(response);
  } else {
    const result = await response.json();
    throw result.message;
  };
};

export { login, registration, check };
