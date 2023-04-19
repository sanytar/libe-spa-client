<script setup lang="ts">
import { useUserStore } from '../../stores/UserStore';
import UserBar from '../UserBar/UserBar.vue';

const store = useUserStore();

</script>

<template>
  <header class="la-header">
    <span class="la-header__logo">
      <la-svg name="logo" />
    </span>
    <user-bar v-if="store.isAuth" />
  </header>
</template>

<style scoped>
.la-header {
  @apply flex justify-between items-center px-6 h-12 bg-dark-red;
}

.la-header__logo {
  @apply cursor-pointer transition-all active:scale-95;
}
</style>