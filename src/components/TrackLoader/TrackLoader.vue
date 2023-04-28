<script setup lang="ts">
import LaModal from '../UI/LaModal/LaModal.vue';
import LaInput from '../UI/LaInput/LaInput.vue';

</script>

<template>
  <div class="track-loader">
    <h1 class="track-loader__header">информация о релизе</h1>
    <la-modal>
      <h2>добавление трека</h2>
      <la-input placeholder="исполнитель" />
      <la-input placeholder="название трека" />
    </la-modal>
  </div>
</template>

<style scoped>
.track-loader {
  @apply flex flex-col justify-center items-center w-full h-[90vh] p-16;
}

.track-loader__header {
  @apply text-white text-7xl font-semibold;
}
</style>