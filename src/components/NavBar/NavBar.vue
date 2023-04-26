<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigationItems = [
  {
    id: 'main',
    name: 'главная',
    routeName: 'TrackList',
  },
  {
    id: 'playlists',
    name: 'мои плейлисты',
    routeName: 'playlists',
  },
  {
    id: 'favorites',
    name: 'избранное',
    routeName: 'favorites',
  },
];

const classList = (route: string) => {
  return {
    navigation__item: true,
    navigation__item_active: route === router.currentRoute.value.name,
  };
};
</script>

<template>
  <nav class="navigation">
    <div
      v-for="item in navigationItems"
      :key="item.id"
      :class="classList(item.routeName)"
      @click="router.push({ name: item.routeName })"
    >
      <p>{{ item.name }}</p>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  @apply flex items-center h-full select-none;
}

.navigation__item {
  @apply flex items-center h-full px-2 text-black hover:cursor-pointer transition-all
  hover:bg-teal-200;
}

.navigation__item_active {
  @apply bg-teal-300 transition-all hover:bg-teal-300;
}
</style>
