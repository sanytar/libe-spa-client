<template>
  <div class="la-error">
    <p><slot></slot></p>
  </div>
</template>

<style scoped>
.la-error {
  @apply flex justify-center items-center w-full p-4 rounded-full border border-solid border-red-600
  bg-red-50/50 text-red-600;
}
</style>