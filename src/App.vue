<script setup lang="ts">
import { useUserStore } from './stores/UserStore';
import LaHeader from './components/LaHeader/LaHeader.vue';
import LaLoader from './components/UI/LaLoader/LaLoader.vue';
import { check } from './http/userAPI';
import { onMounted, ref } from 'vue';
import { AxiosError } from 'axios';
import router from './router';

const store = useUserStore();

const isLoading = ref(true);

onMounted(async () => {
  if (localStorage.getItem('token')) {
    try {
      const user = await check();
      store.authUser(user);
      isLoading.value = false;
    } catch (e) {
      const error = e as AxiosError;
      alert(error.response?.data.massage);
      isLoading.value = false;
      router.push({ name: 'login' });
    }
  } else {
    isLoading.value = false;
  }
});
</script>

<template>
  <la-loader v-if="isLoading" />
  <span v-else>
    <la-header v-if="store.isAuth" />
    <router-view />
  </span>
</template>
