export interface Role {
  id:          number;
  value:       string;
  description: string;
  createdAt:   Date;
  updatedAt:   Date;
  UserRoles:   UserRoles;
}

export interface UserRoles {
  id:     number;
  roleId: number;
  userId: number;
}