<script setup lang="ts">
import { useUserStore } from './stores/UserStore';
import LaHeader from './components/LaHeader/LaHeader.vue';
import { check } from './http/userAPI';
import { onMounted } from 'vue';

const store = useUserStore();

onMounted( async () => {
  if(localStorage.getItem('token')) {
    try {
      const user = await check();
      store.authUser(user);
    } catch (error) {
      alert(error);
    }
  }
});

</script>

<template>
  <la-header v-if="store.isAuth" />
  <router-view />
</template>

<style scoped></style>
