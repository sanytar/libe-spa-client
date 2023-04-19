<script setup lang="ts">
import { computed } from 'vue';
import LaButton from '../UI/LaButton/LaButton.vue';


interface Props {
  size?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});

const classList = computed(() => {
  return {
    'track-card': true,
    'track-card_xl': props.size === 'xl',
    'track-card_sm': props.size === 'sm',
  };
});

</script>

<template>
  <div :class="classList">
    <div class="w-11 h-11 rounded-lg bg-regular-yellow"></div><!-- временная заплатка -->
    <div class="track-card__info">
      <h4>Колеса</h4>
      <p>Скриптонит</p>
      <p class="info-timeline">1:39 / 3:28</p>
    </div>
    <la-button icon="play" size="xs" variation="transparent"/>
  </div>
</template>

<style scoped>
.track-card {
  @apply flex gap-3 p-3 w-fit rounded-xl bg-transparent border border-solid border-dark-red cursor-default
  transition-all hover:bg-light-grey/10 hover:cursor-pointer;
}

.track-card_xl {
  @apply 
}

/* .track-card_sm {
  @apply 
} */

.track-card__info {
  @apply flex flex-col items-start justify-between w-20 text-regular-white;
}

.track-card__info h4 {
  @apply font-medium leading-5;
}

.track-card__info p {
  @apply text-sm leading-4;
}

/* .info-timeline {

} */
</style>