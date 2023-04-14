<script setup lang="ts">
import { defineAsyncComponent, computed, defineProps } from 'vue';
const props = withDefaults(defineProps<{ name?: string }>(), {
  name: '',
});
const currentComponent = computed(() => {
  return defineAsyncComponent(() => import(`../../../assets/icons/${props.name}-icon.svg?component`));
});
</script>


<template>
    <component :is="currentComponent"/>
</template>