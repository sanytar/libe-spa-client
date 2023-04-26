<script setup lang="ts">
import LaModal from '../UI/LaModal/LaModal.vue';
import LaInput from '../UI/LaInput/LaInput.vue';
import LaCheckbox from '../UI/LaCheckbox/LaCheckbox.vue';
import LaButton from '../UI/LaButton/LaButton.vue';
import { computed, ref } from 'vue';
import { PotentialUser } from '../../interfaces/UserInterfaces';
import { login } from '../../http/userAPI';
import { useUserStore } from '../../stores/UserStore';
import { User } from '../../interfaces/UserInterfaces';
import { useRouter } from 'vue-router';

const store = useUserStore();
const router = useRouter();

const potentialUser = ref<PotentialUser>({
  email: '',
  password: '',
});

const error = ref<any>(null);

const passwordVisible = ref(false);
const inputType = computed(() => (passwordVisible.value ? 'text' : 'password'));
const isButtonDisabled = computed(
  () => potentialUser.value.email === '' || potentialUser.value.password === ''
);

const logIn = async (e: Event) => {
  e.preventDefault();
  try {
    const user: User = await login(potentialUser.value);
    store.authUser(user);
    router.push({ name: 'TrackList' });
  } catch (e) {
    error.value = e;
  }
};
</script>

<template>
  <form class="auth-form">
    <la-modal>
      <h1>авторизация</h1>
      <p v-if="error" class="auth-form__error">введены неверные данные</p>
      <div class="auth-form__inputs">
        <la-input
          v-model="potentialUser.email"
          placeholder="введите свой e-mail"
          id="email"
        />
        <la-input
          v-model="potentialUser.password"
          :type="inputType"
          placeholder="введите свой пароль"
        />
      </div>
      <div class="auth-form__fieldset">
        <la-checkbox v-model="passwordVisible">показать пароль</la-checkbox>
        <p>
          ещё не с нами?
          <router-link to="/registration">присоединяйся</router-link>
        </p>
      </div>
      <la-button
        :disabled="isButtonDisabled"
        variation="transparent"
        @click="logIn"
        >войти</la-button
      >
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
