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

const authForm = ref<AuthForm>({
  email: '',
  password: '',
});

const rules = {
  email: { required, email },
  password: {
    required,
    minLength: minLength(4),
  },
};
const v$ = useVuelidate(rules, authForm.value);

const errorMessage = ref('');

const passwordVisible = ref(false);
const inputType = computed(() => (passwordVisible.value ? 'text' : 'password'));
const isButtonDisabled = computed(() => {
  return (authForm.value.email === '' || authForm.value.password === '');
}
);

const logIn = async () => {
  const result = await v$.value.$validate();
  if (result) {
    try {
      const user: User = await login(authForm.value);
      store.authUser(user);
      router.push({ name: 'track-list' });
    } catch (e) {
      errorMessage.value = e as string;
    }
  }
};
</script>

<template>
  <form class="auth-form" @submit.prevent="logIn">
    <la-modal>
      <template #header>авторизация</template>
      <template #error>
        <la-error v-if="errorMessage">{{ errorMessage }}</la-error>
      </template>
      <template #inputs>
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
      </template>
      <template #validate-errors>
        <span v-if="v$.$errors[0]" class="auth-form__validate-errors">
          <transition-group name="list" tag="div">
            <div v-for="error in v$.$errors" :key="error.$uid">
              {{ error.$property }} - {{ error.$message }}
            </div>
          </transition-group>
        </span>
      </template>
      <template #fieldset>
        <div class="auth-form__fieldset">
          <la-checkbox v-model="passwordVisible">показать пароль</la-checkbox>
          <p>
            ещё не с нами?
            <router-link to="/registration">присоединяйся</router-link>
          </p>
        </div>
      </template>
      <template #button>
        <la-button
          :disabled="isButtonDisabled"
          variation="transparent"
        >
          войти
        </la-button>
      </template>
    </la-modal>
  </form>
</template>

<style scoped>
.auth-form {
  @apply flex justify-center items-center bg-started-page bg-center bg-cover bg-no-repeat h-[100vh] w-full;
}

.auth-form__validate-errors {
  @apply flex flex items-center w-full px-6 py-2 rounded-3xl bg-red-800/10  text-red-600;
}

.auth-form__validate-errors div {
  @apply pb-1 border-b border-red-600 last:border-none last:pb-0;
}

.auth-form__fieldset {
  @apply flex justify-between items-center w-full text-sm select-none;
}

.auth-form__fieldset a {
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
