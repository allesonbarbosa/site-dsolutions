import { createRouter, createWebHistory } from 'vue-router';
import PageView from '@/views/PageView.vue';
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
    component: PageView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
