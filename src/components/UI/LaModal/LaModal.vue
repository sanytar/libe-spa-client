<template>
  <div class="la-modal">
    <div class="la-modal__window">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.la-modal {
  @apply flex justify-center items-center h-[100vh] absolute top-0 right-0 bottom-0 left-0 
  bg-black/40 transition-all;
}

.la-modal__window {
  @apply flex flex-col items-center gap-5 w-100 px-6 py-8 rounded-3xl bg-teal-100 transition-all;
}
</style>