<script setup lang="ts">
import LaModal from '../UI/LaModal/LaModal.vue';
import LaInput from '../UI/LaInput/LaInput.vue';
import LaCheckbox from '../UI/LaCheckbox/LaCheckbox.vue';
import LaButton from '../UI/LaButton/LaButton.vue';
import LaError from '../UI/LaError/LaError.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { registration } from '../../http/userAPI';
import { RegistrationForm, User } from '../../interfaces/UserInterfaces';
import { useUserStore } from '../../stores/UserStore';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';

const store = useUserStore();
const router = useRouter();

const registrationForm = ref<RegistrationForm>({
  email: '',
  username: '',
  password: '',
  confirmedPassword: '',
});

const rules = computed(() => {
  return {
    email: { required, email },
    username: { required, minLength: minLength(4) },
    password: { required, minLength: minLength(8) },
    confirmedPassword: {
      sameAs: sameAs(registrationForm.value.password),
    },
  };
});

const v$ = useVuelidate(rules, registrationForm.value);

const errorMessage = ref('');

const passwordVisible = ref(false);
const inputType = computed(() => (passwordVisible.value ? 'text' : 'password'));
const isButtonDisabled = computed(() => {
  let result;
  for (const key in registrationForm.value) {
    result = registrationForm.value[key as keyof RegistrationForm] === '';
  }
  return result;
});

const registrateUser = async () => {
  const result = await v$.value.$validate();
  if (result) {
    try {
      const user: User = await registration(registrationForm.value);
      store.authUser(user);
      router.push({ name: 'track-list' });
    } catch (e) {
      errorMessage.value = e as string;
    }
  }
};
</script>

<template>
  <form class="registration-form" @submit.prevent="registrateUser">
    <la-modal>
      <template #header>регистрация</template>
      <template #error>
        <la-error v-if="errorMessage">{{ errorMessage }}</la-error>
      </template>
      <template #inputs>
        <la-input
          v-model="registrationForm.email"
          placeholder="введите свой e-mail"
        />
        <la-input
          v-model="registrationForm.username"
          placeholder="придумайте никнейм"
        />
        <la-input
          v-model="registrationForm.password"
          placeholder="придумайте пароль"
          :type="inputType"
        />
        <la-input
          v-model="registrationForm.confirmedPassword"
          placeholder="повторите пароль"
          :type="inputType"
        />
      </template>
      <template #validate-errors>
        <span v-if="v$.$errors[0]" class="registration-form__validate-errors">
          <transition-group name="list" tag="div">
            <div v-for="error in v$.$errors" :key="error.$uid">
              {{ error.$property }} - {{ error.$message }}
            </div>
          </transition-group>
        </span>
      </template>
      <template #fieldset>
        <div class="registration-form__fieldset">
          <la-checkbox v-model="passwordVisible">показать пароль</la-checkbox>
          <p>уже есть аккаунт? <router-link to="/login">войти</router-link></p>
        </div>
      </template>
      <template #button>
        <la-button
          :disabled="isButtonDisabled"
          variation="transparent"
          size="xl"
        >
          зарегистрироваться
        </la-button>
      </template>
    </la-modal>
  </form>
</template>

<style scoped>
.registration-form {
  @apply flex justify-center items-center bg-started-page bg-center bg-cover bg-no-repeat h-[100vh] w-full;
}

.registration-form h1 {
  @apply text-4xl font-semibold select-none;
}

.registration-form__inputs {
  @apply flex flex-col gap-3 w-full;
}

.registration-form__validate-errors {
  @apply flex items-center w-full px-6 py-2 rounded-3xl bg-red-800/10  text-red-600;
}

.registration-form__validate-errors div {
  @apply pb-1 border-b border-red-600 last:border-none last:pb-0;
}

.registration-form__fieldset {
  @apply flex justify-between items-center w-full text-sm select-none;
}

.registration-form__fieldset a {
  @apply text-teal-600 hover:text-teal-400 transition-all;
}

.list-enter-active {
  @apply transition-all duration-500;
}

.list-leave-active {
  @apply transition-all;
}
.list-enter-from {
  @apply opacity-0 translate-x-16;
}

.list-leave-to {
  @apply opacity-0 -translate-x-16;
}
</style>
