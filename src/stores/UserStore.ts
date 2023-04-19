import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from '../interfaces/UserInterfaces';




export const useUserStore = defineStore('userStore', () => {
  const currentUser = ref<User | null>(null);
  const isAuth = ref<boolean>(false);

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