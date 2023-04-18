<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  inputType?: string;
  placeholder?: string;
  variation?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  inputType: 'input',
  placeholder: '',
  variation: 'default',
  disabled: false,
  size: 'none',
});

const emit = defineEmits(['update:modelValue']);

const classList = computed(() => {
  return {
    'la-input': true,
    'la-input_textarea': props.inputType === 'textarea',
    'la-input_white': props.variation === 'white',
  };
});

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    v-if="inputType === 'input'"
    :placeholder="placeholder"
    :class="classList"
    :disabled="disabled"
    type="text"
    @input="updateValue"
  />
  <textarea v-else :class="classList" :placeholder="placeholder"></textarea>
</template>

<style scoped>
.la-input {
  @apply w-full p-4 border border-solid bg-transparent font-medium border-dark-grey rounded-full outline-none transition-all 
  disabled:border-light-grey disabled:text-light-grey focus:shadow-md;
}

.la-input::placeholder {
  @apply text-regular-grey;
}

.la-input_textarea {
  @apply rounded-4xl h-full resize-none;
}

.la-input_white {
  @apply bg-transparent border-regular-white text-regular-white focus:shadow-md-white;
}
</style>
