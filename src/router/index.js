import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { SUPPORT_LOCALES } from '@/translation';

const DEFAULT_LOCALE = 'pt';

const routes = [
  {
    path: '/',
    redirect: () => {
      const browserLang = navigator.language.split('-')[0];
      return SUPPORT_LOCALES.includes(browserLang)
        ? `/${browserLang}`
        : `/${DEFAULT_LOCALE}`;
    },
  },

  {
    path: '/:locale',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
