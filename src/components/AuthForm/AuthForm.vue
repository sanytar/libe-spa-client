<script setup lang="ts">
import LaModal from '../UI/LaModal/LaModal.vue';
import LaInput from '../UI/LaInput/LaInput.vue';
import LaCheckbox from '../UI/LaCheckbox/LaCheckbox.vue';
import LaButton from '../UI/LaButton/LaButton.vue';
import LaError from '../UI/LaError/LaError.vue';
import { computed, ref } from 'vue';
import { AuthForm } from '../../interfaces/UserInterfaces';
import { login } from '../../http/userAPI';
import { useUserStore } from '../../stores/UserStore';
import { User } from '../../interfaces/UserInterfaces';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

const store = useUserStore();
const router = useRouter();

const rules = {
  email: { required, email },
  password: { 
    required,
    minLength: minLength(4),
  },
};

const authForm = ref<AuthForm>({
  email: '',
  password: '',
});

const v$ = useVuelidate(rules, authForm.value);

const errorMessage = ref('');

const passwordVisible = ref(false);
const inputType = computed(() => (passwordVisible.value ? 'text' : 'password'));
const isButtonDisabled = computed(
  () => authForm.value.email === '' || authForm.value.password === ''
);

const logIn = async () => {
  const result = await v$.value.$validate();
  if (result) {
    try {
      const user: User = await login(authForm.value);
      store.authUser(user);
      router.push({ name: 'TrackList' });
    } catch (e: any) {
      errorMessage.value = e.response.data.message;
    }
  }
};
</script>

<template>
  <form class="auth-form">
    <la-modal>
      <h1>авторизация</h1>
      <la-error v-if="errorMessage">{{ errorMessage }}</la-error>
      <div class="auth-form__inputs">
        <la-input
          id="email"
          v-model="authForm.email"
          placeholder="введите свой e-mail"
        />
        <la-input
          v-model="authForm.password"
          :type="inputType"
          placeholder="введите свой пароль"
        />
      </div>
      <span v-if="v$.$errors[0]" class="auth-form__validate-errors">
        <transition-group name="list" tag="div">
          <div
            v-for="error in v$.$errors" 
            :key="error.$uid"
          >
            {{ error.$property }} - {{ error.$message }}
          </div>
        </transition-group>
      </span>
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
        @click.prevent="logIn"
        >
          войти
        </la-button
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

.auth-form__validate-errors {
  @apply flex items-center w-full h-32 px-6 py-2 rounded-3xl bg-red-800/10  text-red-600;
}

.auth-form__fieldset {
  @apply flex justify-between items-center w-full text-sm select-none;
}

.auth-form__fieldset a {
  @apply text-teal-400 hover:text-teal-600 transition-all;
}

.invalid-input {
  @apply border-red-600;
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
