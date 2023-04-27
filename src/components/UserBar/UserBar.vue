<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '../../stores/UserStore';
import { useRouter } from 'vue-router';

const store = useUserStore();
const router = useRouter();

const menuTextList = [
  'добавить трек',
  'профиль',
  'плейлисты',
  'мои треки',
  'выйти',
];

const isMenuOpened = ref(false);

const classList = computed(() => {
  return {
    'user-bar': true,
    'user-bar_opened': isMenuOpened.value,
  };
});

const logOut = (item: string) => {
  if (item === 'выйти') {
    store.logOut();
    router.push({ name: 'login' });
  }
};
</script>

<template>
  <nav :class="classList" @click="isMenuOpened = !isMenuOpened">
    <div class="user-bar__user-image"></div>
    <p class="user-bar__user-name">{{ store.currentUser?.username }}</p>
    <transition name="menu">
      <ul v-if="isMenuOpened" class="user-bar__menu">
        <li
          v-for="(item, index) of menuTextList"
          :key="index"
          @click="logOut(item)"
        >
          <p>{{ item }}</p>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<style scoped>
.user-bar {
  @apply relative flex items-center gap-2 p-2 select-none transition-all hover:bg-teal-200 
  hover:cursor-pointer active:bg-teal-300;
}

.user-bar_opened {
  @apply bg-teal-300 transition-all hover:bg-teal-300;
}

.user-bar__user-image {
  @apply w-8 h-8 rounded-full bg-dark-grey;
}

.user-bar__user-name {
  @apply w-[6.5rem] text-dark-grey text-center overflow-hidden;
}

.user-bar__menu {
  @apply absolute z-10 top-12 right-0 rounded-b-2xl text-center bg-teal-300 w-40 overflow-y-hidden select-none;
}

.user-bar__menu li {
  @apply cursor-pointer hover:bg-teal-200;
}

.user-bar__menu li p {
  @apply p-2 active:scale-95;
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
