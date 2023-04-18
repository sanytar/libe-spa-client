import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import StartedPage from '../components/StartedPage/StartedPage.vue';
import TrackList from '../components/TrackList/TrackList.vue';
import AuthForm from '../components/AuthForm/AuthForm.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'StartedPage',
    component: StartedPage,
  },
  {
    path: '/login',
    name: 'login',
    component: AuthForm,
  },
  {
    path: '/registration',
    name: 'registration',
    component: AuthForm,
  },
  {
    path: '/tracks',
    name: 'TrackList',
    component: TrackList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;