<script setup lang="ts">
import { computed } from 'vue';
interface Props {
  size?: string;
}
const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});
const emit = defineEmits(['update:modelValue']);
const checkboxClasses = computed(() => {
  return {
    'la-checkbox': true,
    'la-checkbox_sm': props.size === 'sm',
    'la-checkbox_md': props.size === 'md',
    'la-checkbox_lg': props.size === 'lg',
    'la-checkbox_xl': props.size === 'xl',
  };
});
const checkmarkClasses = computed(() => {
  return {
    checkmark: true,
    checkmark_sm: props.size === 'sm',
    checkmark_md: props.size === 'md',
    checkmark_lg: props.size === 'lg',
    checkmark_xl: props.size === 'xl',
  };
});
const updateChecked = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).checked);
};
</script>

<template>
  <label :class="checkboxClasses">
    <slot />
    <input
      type="checkbox"
      :checked="['onUpdate:modelValue']"
      @change="updateChecked"
    />
    <span :class="checkmarkClasses" />
  </label>
</template>

<style scoped>
.la-checkbox {
  @apply block relative cursor-pointer select-none;
}
.la-checkbox_sm {
  @apply pl-5 text-xs;
}
.la-checkbox_md {
  @apply pl-6 text-sm;
}
.la-checkbox_lg {
  @apply pl-7 text-base;
}
.la-checkbox_xl {
  @apply pl-9 text-2xl;
}
.la-checkbox input {
  @apply absolute opacity-0 cursor-pointer h-0 w-0;
}
.checkmark {
  @apply absolute top-0 left-0 rounded-lg bg-transparent border border-solid border-dark-grey duration-300
  after:absolute after:hidden after:content-[''] after:left-2 after:top-1 after:w-1.5 after:h-3
  after:border after:border-solid after:border-black after:border-t-0 after:border-r-2 after:border-b-2
  after:border-l-0 after:rotate-45 after:duration-300;
}
.checkmark_sm {
  @apply w-4 h-4 after:left-[0.325rem] after:top-0.5 after:w-1 after:h-2;
}
.checkmark_md {
  @apply w-5 h-5 after:left-[0.4rem] after:top-[0.08rem] after:w-1.5 after:h-3;
}
.checkmark_lg {
  @apply w-6 h-6;
}
.checkmark_xl {
  @apply w-8 h-8 after:left-3 after:top-1 after:w-2 after:h-4;
}
.la-checkbox input:checked ~ .checkmark:after {
  @apply block;
}
</style>