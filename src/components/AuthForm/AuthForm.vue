<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { login, registration } from '../../http/userAPI';
import { useUserStore } from '../../stores/UserStore';
import { User } from '../../interfaces/UserInterfaces';

const router = useRouter();
const store = useUserStore();

const isLoginPage = computed( () => router.currentRoute.value.name === 'login' );
const dataError = ref<any>(null);

const isCheckboxChecked = ref(false);

const inputType = computed( () => isCheckboxChecked.value ? 'text' : 'password' );
const buttonSize = computed( () => isLoginPage.value ? 'md' : 'xl' );
const inputPlaceholder = computed( () => isLoginPage.value ? 'введи свой пароль' : 'придумай пароль' );
const isButtonDisabled = computed( () => {
  if(isLoginPage.value) {
    return !( user.value.email !== '' && user.value.password !== '' );
  } else {
    return !( user.value.email !== '' && user.value.password !== '' && confirmPassword.value !== '' );
  }
});

const confirmPassword = ref('');
const user = ref({
  email: '',
  password: ''
});

const authorization = async () => {
  let currentUser: User | null;
  if(isLoginPage.value) {
    try {
      currentUser = await login(user.value);
      store.logIn(currentUser);
      router.push({ name: 'TrackList' });
    } catch ( error ) {
      dataError.value = error;
    }
    
  } else {
    if( confirmPassword.value === user.value.password ) {
      currentUser = await registration(user.value);
      store.logIn(currentUser);
      router.push({ name: 'TrackList' });
    } else {
      alert('Пароли не совпадают');
    };
  }
};

</script>

<template>
  <div class="la-modal">
    <div class="la-modal__modal-window">
      <h1>{{ isLoginPage ? 'авторизация' : 'регистрация' }}</h1>
      <p v-if="dataError">{{ dataError.message }}</p>
      <la-input v-model="user.email" :autofocus="true" placeholder="введите свой e-mail" />
      <la-input v-model="user.password" :type="inputType" :placeholder="inputPlaceholder" />
      <la-input 
        v-if="!isLoginPage" 
        v-model="confirmPassword" 
        :type="inputType" 
        placeholder="повтори пароль" 
      />
      <div class="modal-window__fieldset">
        <la-checkbox v-model="isCheckboxChecked">показать пароль</la-checkbox>
        <p v-if="isLoginPage">
          ещё не с нами?
          <router-link to="/registration">можем это исправить</router-link>
        </p>
        <p v-else>
          уже с нами?
          <router-link to="/login">покажи себя</router-link>
        </p>
      </div>
      <la-button 
        :size="buttonSize"
        variation="transparent"
        :disabled="isButtonDisabled"
        @click="authorization"
      >
        {{ isLoginPage ? 'войти' : 'зарегистрироваться' }}
      </la-button>
    </div>
  </div>
</template>

<style scoped>
.la-modal {
  @apply flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 h-[100vh] bg-dark-grey;
}

.la-modal__modal-window {
  @apply flex flex-col items-center gap-4 px-16 py-8 w-[552px] bg-dark-green rounded-4xl;
}

.la-modal__modal-window h1 {
  @apply text-5xl font-semibold mb-5 select-none;
}

.modal-window__fieldset {
  @apply flex w-full justify-between text-sm select-none;
}

.modal-window__fieldset a {
  @apply text-lighter-yellow transition-all hover:text-regular-yellow;
}
</style>