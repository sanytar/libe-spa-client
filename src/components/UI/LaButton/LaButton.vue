<script setup lang="ts">
import { computed } from 'vue';
import LaSvg from '../LaSvg/LaSvg.vue';

interface Props {
  disabled?: boolean;
  active?: boolean;
  size?: string;
  variation?: string;
  icon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  active: false,
  size: 'md',
  variation: 'default',
  icon: '',
});

const classList = computed(() => {
  return {
    'la-button': true,
    'la-button_active': props.active,
    'la-button_transparent': props.variation === 'transparent',
    'la-button_xs': props.size === 'xs',
    'la-button_sm': props.size === 'sm',
    'la-button_md': props.size === 'md',
    'la-button_lg': props.size === 'lg',
    'la-button_xl': props.size === 'xl',
  };
});

const textVisible = computed(() => props.size !== 'xs' && props.size !== 'sm');
</script>

<template>
  <button :class="classList" :disabled="props.disabled">
    <p v-if="textVisible"><slot></slot></p>
    <la-svg v-if="!!props.icon" :name="props.icon" class="la-button__icon" />
  </button>
</template>

<style scoped>
.la-button {
  @apply flex p-1.5 items-center justify-center bg-regular-red rounded-full text-regular-white border border-solid border-regular-red
  duration-200 hover:bg-light-red hover:border-darkest-red hover:duration-200 hover:shadow-msd-red
  active:bg-darkest-red active:border-darkest-red active:duration-200 active:shadow-msd-d-red active:scale-95 
  disabled:bg-light-grey disabled:border-light-grey disabled:shadow-none disabled:duration-200;
}

.la-button p {
  @apply p-1.5 pl-0 min-w-[5.875rem];
}

.la-button .la-button__icon {
  @apply duration-500;
}

.la-button:active .la-button__icon {
  @apply -rotate-180 duration-200;
}
.la-button_active {
  @apply bg-darkest-red border-darkest-red duration-200 hover:bg-light-red hover:duration-200
  hover:shadow-msd-red active:bg-regular-red active:border-regular-red active:shadow-msd-red;
}

.la-button_transparent {
  @apply bg-transparent border-dark-grey text-dark-grey duration-200 hover:bg-transparent hover:shadow-md
  hover:border-dark-grey hover:duration-200;
}

.la-button_xs {
  @apply p-1 border-regular-white hover:border-regular-white active:scale-95;
}

.la-button_xs:active .la-button__icon {
  @apply rotate-0;
}

.la-button_sm {
  @apply p-1.5 border-regular-white scale-100 hover:border-regular-white active:scale-100;
}

.la-button_sm:active .la-button__icon {
  @apply rotate-0;
}

.la-button_md {
  @apply w-36;
}

.la-button_lg {
  @apply w-46;
}

.la-button_lg p {
  @apply w-34;
}

.la-button_xl {
  @apply w-56;
}

.la-button_xl p {
  @apply w-43.5;
}
</style>
