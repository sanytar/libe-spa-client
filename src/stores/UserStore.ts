import { defineStore } from 'pinia';
import { ref } from 'vue';

interface User {
  email: string;
  id:    number;
  roles: Role[];
  iat:   number;
  exp:   number;
}

interface Role {
  id:          number;
  value:       string;
  description: string;
  createdAt:   Date;
  updatedAt:   Date;
  UserRoles:   UserRoles;
}

interface UserRoles {
  id:     number;
  roleId: number;
  userId: number;
}

export const useUserStore = defineStore('userStore', () => {
  const currentUser = ref<User | null>(null);
  const isAuth = ref<boolean>(true);

  const logIn = (user: User) => {
    currentUser.value = user;
    isAuth.value = true;
  };

  return {
    currentUser,
    isAuth,
    logIn,
  };
});