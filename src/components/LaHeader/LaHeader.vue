<script setup lang="ts">
import UserBar from '../UserBar/UserBar.vue';
import NavBar from '../NavBar/NavBar.vue';
import LaSvg from '../UI/LaSvg/LaSvg.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <header class="la-header">
    <div class="la-header__container">
      <span class="la-header__logo" @click="router.push({ name: 'TrackList' })">
        <la-svg name="logo" />
      </span>
      <nav-bar />
      <user-bar /> 
    </div>
  </header>
</template>

<style scoped>
.la-header {
  @apply flex justify-center w-full bg-teal-100;
}

.la-header__container {
  @apply flex justify-between items-center w-full max-w-7xl h-12 px-6;
}

.la-header__logo {
  @apply cursor-pointer transition-all active:scale-98;
}
</style>
