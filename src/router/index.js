import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ConverterView from '../views/ConverterView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/converter',
    name: 'converter',
    component: ConverterView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
