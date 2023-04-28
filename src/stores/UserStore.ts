import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from '../interfaces/UserInterfaces';

export const useUserStore = defineStore('userStore', () => {
  const currentUser = ref<User | null>(null);
  const isAuth = ref<boolean>(false);
  const isLoading = ref<boolean>(true);

  const authUser = (user: User) => {
    currentUser.value = user;
    isAuth.value = true;
    isLoading.value = false;
  };

  const logOut = () => {
    currentUser.value = null;
    isAuth.value = false;
    localStorage.removeItem('token');
  };

  return {
    currentUser,
    isAuth,
    isLoading,
    authUser,
    logOut,
  };
});
