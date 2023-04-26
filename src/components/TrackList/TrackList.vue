<script setup lang="ts">
import TrackCard from '../TrackCard/TrackCard.vue';

const trackList = [
  {
    id: 1,
    author: 'Скриптонит',
    name: 'Колеса',
  },
  {
    id: 2,
    author: '84x10 synt3tic',
    name: 'Из франции',
  },
  {
    id: 3,
    author: 'Моргенштерн',
    name: 'Гавно',
  },
  {
    id: 4,
    author: 'Alisha',
    name: 'Пропал',
  },
  {
    id: 5,
    author: 'LOVV66',
    name: 'МАЙ МАЙ',
  },
  {
    id: 6,
    author: 'Eminem',
    name: 'Mockingbird',
  },
  {
    id: 7,
    author: 'Король и Шут',
    name: 'Кукла колдуна',
  },
  {
    id: 8,
    author: 'Баста',
    name: 'Осень',
  },
  {
    id: 9,
    author: 'uglystephan & SCALLY MILANO',
    name: 'Заберу',
  },
];
</script>

<template>
  <span class="track-list">

    <div class="track-list__tracks">
      <track-card 
        v-for="track in trackList"
        :key="track.id"
        :author="track.author" 
        :name="track.name"
        size="lg"
      />
    </div>
  </span>
</template>

<style scoped>
.track-list {
  @apply flex justify-center items-center w-full;
}

.track-list__tracks {
  @apply flex justify-start items-start gap-2 max-w-7xl flex-wrap p-4;
}
</style>
