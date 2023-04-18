<script setup lang="ts">
import { useUserStore } from '../../stores/UserStore';

const store = useUserStore();
</script>

<template>
  <div class="text-white">
    {{ store.currentUser?.email }}
  </div>
</template>

<style scoped>

</style>