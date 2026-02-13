import { createRouter, createWebHistory } from 'vue-router';
import PageView from '@/views/PageView.vue';
import { SUPPORT_LOCALES } from '@/translation';

const DEFAULT_LOCALE = 'pt';

const routes = [
  {
    path: '/',
    redirect: () => {
      const browserLang = navigator.language.split('-')[0];
      return SUPPORT_LOCALES.includes(browserLang) ? `/${browserLang}` : `/${DEFAULT_LOCALE}`;
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
  scrollBehavior(to, from) {
    if (!from.name && to.hash) {
      return { top: 0 };
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    return { top: 0 };
  },
});

router.afterEach((to) => {
    history.replaceState(
      null,
      '',
      to.path,
    );
});

export default router;
