<script setup lang="ts">
import LaButton from '../UI/LaButton/LaButton.vue';

</script>

<template>
  <div class="start-page">
    <section class="start-page__section">
      <h1>LIBA</h1>
      <h2>по-настоящему свободная музыкальная площадка</h2>
      <p>создавай, делись, слушай, будь свободен</p>
      <la-button size="lg" icon="play">присоединиться</la-button>
    </section>
  </div>
</template>

<style scoped>
.start-page {
  @apply flex justify-center items-center bg-started-page bg-center bg-cover bg-no-repeat h-[100vh] 
  p-16 text-white select-none;
}

.start-page__section {
  @apply flex flex-col justify-center items-end md:gap-4 gap-1 mt-18 w-full max-w-7xl text-right;
}

.start-page__section h1 {
  @apply md:text-6.5xl text-4xl;
}

.start-page__section h2 {
  @apply md:text-3.5xl text-2xl;
}

.start-page__section p {
  @apply md:text-2xl text-base text-light-red;
}

</style>