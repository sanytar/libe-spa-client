import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import StartedPage from '../components/StartedPage/StartedPage.vue';
import TrackList from '../components/TrackList/TrackList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'StartedPage',
    component: StartedPage,
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