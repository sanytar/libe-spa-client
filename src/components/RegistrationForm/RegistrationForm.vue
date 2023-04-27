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
    username: { required, minLength: minLength(4), },
    password: { required, minLength: minLength(8), },
    confirmedPassword: { required, sameAs: sameAs(registrationForm.value.password), }
  };
});

const v$ = useVuelidate(rules, registrationForm.value);

const errorMessage = ref('');

const passwordVisible = ref(false);
const inputType = computed(() => (passwordVisible.value ? 'text' : 'password'));
const isButtonDisabled = computed(() => {
  let result;
  for (const key in registrationForm.value) {
    result =
      registrationForm.value[key as keyof RegistrationForm] === '' ? true : false;
  }
  return result;
});

const registrateUser = async () => {
  const result = await v$.value.$validate();
  if (result) {
    try {
      const user: User = await registration(registrationForm.value);
      store.authUser(user);
      router.push({ name: 'TrackList' });
    } catch (e: any) {
      errorMessage.value = e.response?.data.message;
    }
  }
};
</script>

<template>
  <form class="registration-form">
    <la-modal>
      <h1>регистрация</h1>
      <la-error v-if="errorMessage">{{ errorMessage }}</la-error>
      <div class="registration-form__inputs">
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
      </div>
      <span v-if="v$.$errors[0]" class="registration-form__validate-errors">
        <transition-group name="list" tag="div">
          <div
            v-for="error in v$.$errors" 
            :key="error.$uid"
          >
            {{ error.$property }} - {{ error.$message }}
          </div>
        </transition-group>
      </span>
      <div class="registration-form__fieldset">
        <la-checkbox v-model="passwordVisible">показать пароль</la-checkbox>
        <p>уже есть аккаунт? <router-link to="/login">войти</router-link></p>
      </div>
      <la-button
        :disabled="isButtonDisabled"
        variation="transparent"
        size="xl"
        @click.prevent="registrateUser"
      >
        зарегистрироваться
      </la-button>
    </la-modal>
  </form>
</template>

<style scoped>
.registration-form {
  @apply bg-started-page bg-center bg-cover bg-no-repeat h-[100vh];
}

.registration-form__error {
  @apply text-red-600;
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
  @apply text-teal-400 hover:text-teal-600 transition-all;
}

.list-enter-active {
  transition: all 0.5s;
}

.list-leave-active {
  transition: all 0.15s;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(4rem);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-4rem);
}
</style>
