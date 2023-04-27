export interface User {
  id: number;
  email: string;
  username: string;
  iat: number;
  exp: number;
}

export interface AuthForm {
  email: string;
  password: string;
}

export interface RegistrationForm {
  email: string;
  username: string;
  password: string;
  confirmedPassword: string;
}
