import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import StartedPage from '../components/StartedPage/StartedPage.vue';
import TrackList from '../components/TrackList/TrackList.vue';
import AuthForm from '../components/AuthForm/AuthForm.vue';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm.vue';
import TrackLoader from '../components/TrackLoader/TrackLoader.vue';
import { useUserStore } from '../stores/UserStore';
import { check } from '../http/userAPI';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'start-page',
    component: StartedPage,
    meta: { requiresAuth: false },
  },
  {
    path: '/login',
    name: 'login',
    component: AuthForm,
    meta: { requiresAuth: false },
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationForm,
    meta: { requiresAuth: false },
  },
  {
    path: '/tracks',
    name: 'track-list',
    component: TrackList,
    meta: { requiresAuth: true },
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: TrackList,
    meta: { requiresAuth: true },
  },
  {
    path: '/tracks',
    name: 'favorites',
    component: TrackList,
    meta: { requiresAuth: true },
  },
  {
    path: '/track-adding',
    name: 'track-adding',
    component: TrackLoader,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach( async (to, from, next) => {
  const store = useUserStore();

  if (localStorage.getItem('token')) {
    try {
      const user = await check();
      store.authUser(user);
    } catch (e) {
      alert(e as string);
      localStorage.removeItem('token');
    }
  } else {
    store.isLoading = false;
  }

  if (store.isAuth && !(to.meta.requiresAuth)) next({ name: 'track-list' });
  if (!(store.isAuth) && to.meta.requiresAuth) next({ name: 'login'});
  next();
});

export default router;
