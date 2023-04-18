import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import components from './components/UI/index';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

components.forEach(component => {
  let name: string;
  if(component.__name) {
    name = component.__name;
    app.component(name, component);
  };
});

app.use(router).use(pinia).mount('#app');
