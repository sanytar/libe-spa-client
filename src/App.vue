<script setup lang="ts">
import { ref } from 'vue';
import LaCheckbox from './components/UI/LaCheckbox/LaCheckbox.vue';
const checked = ref(true);
</script>

<template>
  <div class="p-8">
    <la-checkbox v-model="checked" />
  </div>
</template>

<style scoped></style>
