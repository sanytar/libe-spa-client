export interface User {
  id: number;
  email: string;
  username: string;
  iat: number;
  exp: number;
}

export interface PotentialUser {
  email: string;
  username?: string;
  password: string;
  confirmedPassword?: string;
}
