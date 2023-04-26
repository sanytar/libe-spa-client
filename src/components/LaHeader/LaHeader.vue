<script setup lang="ts">
import { useUserStore } from '../../stores/UserStore';
import UserBar from '../UserBar/UserBar.vue';

const store = useUserStore();

const navigationItems = ['главная', 'мои плейлисты', 'избранное'];

</script>

<template>
  <header class="la-header">
    <span class="la-header__logo">
      <la-svg name="logo" />
    </span>
    <nav class="la-header__navigation">
      <div 
        v-for="(item, index) in navigationItems" 
        :key="index" 
        class="navigation__item"
      >
        <p>{{  item  }}</p>
      </div>
    </nav>
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

.la-header__navigation {
  @apply flex items-center h-full select-none;
}

.navigation__item {
  @apply flex items-center h-full px-2 text-black hover:cursor-pointer transition-all
  hover:bg-teal-200;
}
</style>