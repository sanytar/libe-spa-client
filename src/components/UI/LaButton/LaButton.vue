<script setup lang="ts">
import LaSvg from '../LaSvg/LaSvg.vue';
import { computed } from 'vue';

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
  @apply flex p-1.5 items-center justify-center bg-orange-600 rounded-full text-white transition-all
  hover:bg-orange-700 active:bg-orange-800 active:scale-95 disabled:bg-gray-200 disabled:text-gray-400;
}

.la-button p {
  @apply p-1.5 pl-0 min-w-[5.875rem];
}

.la-button .la-button__icon {
  @apply transition-all;
}

.la-button:active .la-button__icon {
  @apply -rotate-180 transition-all;
}
.la-button_active {
  @apply bg-orange-800 hover:bg-orange-700 active:bg-orange-600;
}

.la-button_transparent {
  @apply bg-transparent border-black text-black hover:shadow-md active:scale-95 transition-all
  border border-solid border-black hover:shadow-lg hover:bg-transparent disabled:bg-black/30
  disabled:text-gray-800 disabled:hover:shadow-none disabled:active:scale-100 active:bg-transparent;
}

.la-button_xs {
  @apply p-1 border-white hover:border-white active:scale-95;
}

.la-button_xs:active .la-button__icon {
  @apply rotate-0;
}

.la-button_sm {
  @apply p-1.5 border-white hover:border-white active:scale-95;
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
