<script setup lang="ts">
import LaSvg from '../UI/LaSvg/LaSvg.vue';
import UserBar from '../UserBar/UserBar.vue';

interface User {
  id: number;
  email: string;
  banned: boolean;
  banReason: string;
  name: string;
}
interface Props {
  user?: User;
}

const props = defineProps<Props>();

</script>

<template>
  <header class="la-header">
    <span class="la-header__logo">
      <la-svg name="logo" />
    </span>
    <user-bar v-if="props.user" :user="props.user" />
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