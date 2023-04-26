<script setup lang="ts">
import { useUserStore } from '../../stores/UserStore';
import UserBar from '../UserBar/UserBar.vue';
import NavBar from '../NavBar/NavBar.vue';
import { useRouter } from 'vue-router';

const store = useUserStore();
const router = useRouter();
</script>

<template>
  <header class="la-header">
    <span class="la-header__logo" @click="router.push({ name: 'TrackList' })">
      <la-svg name="logo" />
    </span>
    <nav-bar />
    <user-bar v-if="store.isAuth" />
  </header>
</template>

<style scoped>
.la-header {
  @apply flex justify-between items-center px-6 h-12 bg-teal-100;
}

.la-header__logo {
  @apply cursor-pointer transition-all active:scale-95;
}
</style>
