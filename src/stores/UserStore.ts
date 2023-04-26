import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from '../interfaces/UserInterfaces';

export const useUserStore = defineStore('userStore', () => {
  const currentUser = ref<User | null>(null);
  const isAuth = ref<boolean>(false);

  const authUser = (user: User) => {
    currentUser.value = user;
    isAuth.value = true;
  };

  const logOut = () => {
    currentUser.value = null;
    isAuth.value = false;
    localStorage.removeItem('token');
  };

  return {
    currentUser,
    isAuth,
    authUser,
    logOut,
  };
});