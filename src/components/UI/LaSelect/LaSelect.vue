<script setup lang="ts">
import { ref, computed } from 'vue';

interface Option {
  id: number;
  name: string;
}
interface Props {
  options: Option[];
  modelValue?: Option;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
});
const emit = defineEmits(['update:modelValue']);

const selectedOption = ref<Option | null>(null);
const areOptionsOpened = ref(false);

const selectedOptionClasses = computed(() => {
  return {
    'la-select__selected': true,
    'la-select__selected_opened': areOptionsOpened.value,
  };
});
const iconClass = computed(() => {
  return {
    'la-select__icon': true,
    'la-select__icon_opened': areOptionsOpened.value,
  };
});
const optionClasses = (option: Option) => {
  return {
    option: true,
    option_selected: option.id === selectedOption.value?.id,
  };
};
const placeholder = computed(() => {
  let result;
  if (selectedOption.value) {
    result = selectedOption.value.name;
  } else if (props.modelValue) {
    result = props.modelValue.name;
  } else {
    result = 'Выберите';
  }
  return result;
});

const selectOption = (option: Option) => {
  selectedOption.value = option;
  areOptionsOpened.value = !areOptionsOpened.value;
  emit('update:modelValue', option);
};
</script>

<template>
  <div class="la-select">
    <div
      :class="selectedOptionClasses"
      @click="areOptionsOpened = !areOptionsOpened"
    >
      <p>{{ placeholder }}</p>
      <la-svg :class="iconClass" name="chevron" />
    </div>
    <transition name="options">
      <ul v-if="areOptionsOpened" class="la-select__options">
        <li
          v-for="option in props.options"
          :key="option.id"
          :class="optionClasses(option)"
          @click="selectOption(option)"
        >
          {{ option.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.la-select {
  @apply relative;
}
.la-select__selected {
  @apply flex justify-between z-10 p-4 rounded-full w-full bg-dark-red hover:cursor-pointer hover:shadow-md select-none  
  text-regular-white duration-[120ms];
}

.la-select__selected_opened {
  @apply rounded-b-none rounded-t-3.5xl border-b-0 hover:shadow-none duration-[120ms];
}

.la-select__icon {
  @apply duration-300;
}
.la-select__icon_opened {
  @apply origin-center -rotate-180 duration-300;
}

.la-select__options {
  @apply absolute flex flex-col bg-dark-red w-full text-regular-white select-none rounded-b-3.5xl overflow-y-hidden;
}

.option {
  @apply p-4 hover:cursor-pointer hover:bg-light-red/60;
}

.option_selected {
  @apply bg-light-red/60;
}

.options-enter-active,
.options-leave-active {
  @apply transition-opacity duration-200;
}
.options-enter-from,
.options-leave-to {
  @apply opacity-0;
}
</style>
