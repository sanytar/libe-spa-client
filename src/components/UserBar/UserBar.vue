<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '../../stores/UserStore';

const store = useUserStore();

const menuTextList = [ 'добавить трек', 'профиль', 'плейлисты', 'мои треки', 'выйти' ];

const isMenuOpened = ref(false);

const classList = computed(() => {
  return {
    'user-bar': true,
    'user-bar_opened': isMenuOpened.value,
  };
});
</script>

<template>
  <nav :class="classList" @click="isMenuOpened = !isMenuOpened">
    <div class="user-bar__user-image"></div>
    <p class="user-bar__user-name">{{ store.currentUser?.email }}</p>
  </nav>
  <transition name="menu">
    <ul v-if="isMenuOpened" class="user-bar__menu">
      <li v-for="(item, index) of menuTextList" :key="index">
        <p>{{ item }}</p>
      </li>
    </ul>
  </transition>
</template>

<style scoped>
.user-bar {
  @apply relative z-50 flex items-center gap-2 p-2 select-none transition-all hover:bg-regular-red hover:cursor-pointer active:bg-regular-red;
}

.user-bar_opened {
  @apply bg-regular-red transition-all;
}

.user-bar__user-image {
  @apply w-8 h-8 rounded-full bg-dark-grey;
}

.user-bar__user-name {
  @apply w-[6.5rem] text-dark-grey text-center overflow-hidden;
}

.user-bar__menu {
  @apply absolute z-10 right-[1.5rem] top-12 rounded-b-2xl text-center bg-regular-red w-40 overflow-y-hidden select-none;
}

.user-bar__menu li {
  @apply cursor-pointer p-2 hover:bg-dark-red;
}

.user-bar__menu li p {
  @apply active:scale-95;
}

.menu-enter-active,
.menu-leave-active {
  @apply transition-all;
}
.menu-enter-from,
.menu-leave-to {
  @apply opacity-0;
}
</style>