<script setup lang="ts">
import { ref } from 'vue';
import LaInput from './components/UI/LaInput/LaInput.vue';

const text = ref('');
</script>

<template>
  <div class="p-8 bg-dark-grey">
    <la-input
      v-model="text"
      :disabled="false"
      variation="white"
      placeholder="введите текст"
    />
  </div>
</template>

<style scoped></style>
