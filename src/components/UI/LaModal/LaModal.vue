<template>
  <div class="la-modal">
    <h1>
      <slot name="header" />
    </h1>
    <slot name="error" />
    <div class="la-modal__inputs">
      <slot name="inputs" />
    </div>
    <slot name="validate-errors" />
    <slot name="fieldset" />
    <slot name="button" />
  </div>
</template>

<style scoped>

.la-modal {
  @apply flex flex-col items-center gap-5 w-100 px-6 py-8 rounded-3xl bg-teal-100 transition-all;
}

.la-modal h1 {
  @apply text-4xl font-semibold select-none;
}

.la-modal__inputs {
  @apply flex flex-col gap-3 w-full;
}
</style>
