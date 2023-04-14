<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  type?: string;
  placeholder?: string;
  variation?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'input',
  placeholder: '',
  variation: 'default',
  disabled: false,
  size: 'none',
});

const emit = defineEmits(['update:modelValue']);

const classList = computed(() => {
  return {
    'la-input': true,
    'la-input_textarea': props.type === 'textarea',
    'la-input_white': props.variation === 'white',
  };
});

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    v-if="type === 'input'"
    :placeholder="placeholder"
    :class="classList"
    :disabled="disabled"
    type="text"
    @input="updateValue"
  />
  <textarea :class="classList" :placeholder="placeholder"></textarea>
</template>

<style scoped>
.la-input {
  @apply w-full p-4 border border-solid border-dark-grey rounded-full outline-none duration-300 
  disabled:border-light-grey disabled:text-light-grey focus:shadow-md focus:duration-300;
}

.la-input_textarea {
  @apply rounded-4xl h-full resize-none;
}

.la-input_white {
  @apply bg-transparent border-regular-white text-regular-white focus:shadow-md-white;
}
</style>
