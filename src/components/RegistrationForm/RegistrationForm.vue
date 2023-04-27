<script setup lang="ts">
import LaModal from '../UI/LaModal/LaModal.vue';
import LaInput from '../UI/LaInput/LaInput.vue';
import LaCheckbox from '../UI/LaCheckbox/LaCheckbox.vue';
import LaButton from '../UI/LaButton/LaButton.vue';
import LaError from '../UI/LaError/LaError.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { registration } from '../../http/userAPI';
import { PotentialUser, User } from '../../interfaces/UserInterfaces';
import { useUserStore } from '../../stores/UserStore';
import { AxiosError } from 'axios';

const store = useUserStore();
const router = useRouter();

const potentialUser = ref<PotentialUser>({
  email: '',
  username: '',
  password: '',
  confirmedPassword: '',
});

const errorMessage = ref('');

const passwordVisible = ref(false);
const inputType = computed(() => (passwordVisible.value ? 'text' : 'password'));
const isButtonDisabled = computed(() => {
  let result;
  for (const key in potentialUser.value) {
    result =
      potentialUser.value[key as keyof PotentialUser] === '' ? true : false;
  }
  return result;
});

const registrateUser = async () => {
  try {
    if (
      potentialUser.value.password === potentialUser.value.confirmedPassword
    ) {
      const user: User = await registration(potentialUser.value);
      store.authUser(user);
      router.push({ name: 'TrackList' });
    } else {
      errorMessage.value = 'Пароли не совпадают';
    }
  } catch (e) {
    const error = e as AxiosError;
    errorMessage.value = error.response?.data.message;
  }
};
</script>

<template>
  <form class="auth-form">
    <la-modal>
      <h1>регистрация</h1>
      <la-error v-if="errorMessage">{{ errorMessage }}</la-error>
      <div class="auth-form__inputs">
        <la-input
          v-model="potentialUser.email"
          placeholder="введите свой e-mail"
        />
        <la-input
          v-model="potentialUser.username"
          placeholder="придумайте никнейм"
        />
        <la-input
          v-model="potentialUser.password"
          placeholder="придумайте пароль"
          :type="inputType"
        />
        <la-input
          v-model="potentialUser.confirmedPassword"
          placeholder="повторите пароль"
          :type="inputType"
        />
      </div>
      <div class="auth-form__fieldset">
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
.auth-form {
  @apply bg-started-page bg-center bg-cover bg-no-repeat h-[100vh];
}

.auth-form__error {
  @apply text-red-600;
}

.auth-form h1 {
  @apply text-4xl font-semibold select-none;
}

.auth-form__inputs {
  @apply flex flex-col gap-3 w-full;
}

.auth-form__fieldset {
  @apply flex justify-between items-center w-full text-sm select-none;
}

.auth-form__fieldset a {
  @apply text-teal-400 hover:text-teal-600 transition-all;
}
</style>
