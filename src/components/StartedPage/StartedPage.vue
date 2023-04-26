<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
  <div class="start-page">
    <section class="start-page__section">
      <h1>LIBA</h1>
      <h2>по-настоящему свободная музыкальная площадка</h2>
      <p>создавай, делись, слушай, будь свободен</p>
      <la-button size="lg" icon="play" @click="router.push({ name: 'login' })">присоединиться</la-button>
    </section>
  </div>
</template>

<style scoped>
.start-page {
  @apply flex justify-center items-center bg-started-page bg-center bg-cover bg-no-repeat h-[100vh] 
  p-16 text-white select-none;
}

.start-page__section {
  @apply flex flex-col justify-center items-start md:gap-4 gap-1 mt-18 w-full max-w-7xl;
}

.start-page__section h1 {
  @apply md:text-6.5xl text-4xl;
}

.start-page__section h2 {
  @apply md:text-3.5xl text-2xl text-orange-600;
}

.start-page__section p {
  @apply md:text-2xl text-base;
}

</style>