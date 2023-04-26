<script setup lang="ts">
import { useUserStore } from './stores/UserStore';
import LaHeader from './components/LaHeader/LaHeader.vue';
import LaLoader from './components/UI/LaLoader/LaLoader.vue';
import { check } from './http/userAPI';
import { onMounted, ref } from 'vue';

const store = useUserStore();

const isLoading = ref(true);

onMounted(async () => {
  if (localStorage.getItem('token')) {
    try {
      const user = await check();
      store.authUser(user);
      isLoading.value = false;
    } catch (error) {
      alert(error);
    }
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
