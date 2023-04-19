import { Role } from "./RoleInterfaces";

export interface User {
  email: string;
  id:    number;
  roles: Role[];
  iat:   number;
  exp:   number;
}

export interface PotentialUser {
  email: string;
  password: string;
}