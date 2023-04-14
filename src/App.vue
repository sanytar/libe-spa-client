<script setup lang="ts">
import { ref } from 'vue';
import LaSelect from './components/UI/LaSelect/LaSelect.vue';

const options = [
  {
    id: 1,
    name: 'Option 1',
  },
  {
    id: 2,
    name: 'Option 2',
  },
  {
    id: 3,
    name: 'Option 3',
  },
  {
    id: 4,
    name: 'Option 4',
  },
];

const selectedOption = ref(
  {
    id: 4,
    name: 'Option 4',
  }
);

</script>

<template>
  <div class="p-8 bg-dark-grey h-[100vh]">
    <la-select v-model="selectedOption" :options="options"></la-select>
  </div>
</template>

<style scoped></style>
