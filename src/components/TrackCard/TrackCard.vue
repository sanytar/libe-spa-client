<script setup lang="ts">
import { computed } from 'vue';
import LaButton from '../UI/LaButton/LaButton.vue';

interface Props {
  size?: string;
  author: string;
  name: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});

const cardClasses = computed(() => {
  return {
    'track-card': true,
    'track-card_sm': props.size === 'sm',
  };
});

const cardCoverClasses = computed(() => {
  return {
    'track-card__cover': true,
    'track-card__cover_lg': props.size === 'lg',
  };
});

const cardInfoClasses = computed(() => {
  return {
    'track-card__info': true,
    'track-card__info_lg': props.size === 'lg',
  };
});
</script>

<template>
  <div :class="cardClasses">
    <span :class="cardCoverClasses"></span>
    <div :class="cardInfoClasses">
      <h4>{{ props.name }}</h4>
      <p>{{ props.author }}</p>
      <p v-if="size === 'lg'" class="info-timeline">1:39 / 3:28</p>
    </div>
    <la-button
      v-if="!(size === 'sm')"
      id="button"
      icon="play"
      size="sm"
      variation="transparent"
      @click.stop
    />
  </div>
</template>

<style scoped>
.track-card {
  @apply flex items-center gap-3 p-3 w-fit rounded-xl bg-transparent border border-solid border-teal-200 cursor-default
  transition-all hover:bg-light-grey/10 hover:cursor-pointer active:scale-98;
}

.track-card_sm {
  @apply gap-1.5 border-none;
}

.track-card__cover {
  @apply w-11 h-11 rounded-lg bg-teal-200;
}

.track-card__cover_lg {
  @apply w-20 h-20;
}

.track-card__info {
  @apply flex flex-col items-start justify-between w-20 h-11 text-regular-white whitespace-nowrap;
}

.track-card__info_lg {
  @apply w-32 h-19;
}

.track-card__info h4 {
  @apply w-full font-medium leading-5 whitespace-nowrap text-ellipsis overflow-hidden;
}

.track-card__info p {
  @apply w-full text-sm leading-4 overflow-hidden text-ellipsis;
}
</style>
