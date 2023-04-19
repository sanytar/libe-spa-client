<script setup lang="ts">
import { useUserStore } from './stores/UserStore';
import LaHeader from './components/LaHeader/LaHeader.vue';

const store = useUserStore();

</script>

<template>
  <la-header v-if="store.isAuth" />
  <router-view />
</template>

<style scoped></style>
