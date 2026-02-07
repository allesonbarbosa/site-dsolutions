import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import './styles/main.scss';
import BaseCard from './components/BaseCard.vue';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './translation';

const app = createApp(App);

router.beforeEach((to) => {
  const locale = to.params.locale;
  if (locale) {
    i18n.global.locale.value = locale;
  }
});

app.provide('bootstrap', bootstrap);

app.component('BaseCard', BaseCard);

app.use(router);
app.use(i18n);


app.mount('#app');
