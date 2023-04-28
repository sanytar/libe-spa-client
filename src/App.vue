<script setup lang="ts">
import { useUserStore } from './stores/UserStore';
import LaHeader from './components/LaHeader/LaHeader.vue';
import LaLoadSpinner from './components/UI/LaLoadSpinner/LaLoadSpinner.vue';

const store = useUserStore();
</script>

<template>
  <la-load-spinner v-if="store.isLoading" />
  <span v-else>
    <la-header v-if="store.isAuth" />
    <router-view />
  </span>
</template>
