import { createI18n } from 'vue-i18n';

import pt from './pt.json';
import en from './en.json';
import es from './es.json';

export const SUPPORT_LOCALES = ['pt', 'en', 'es'];

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: { pt, en, es }
});

export default i18n;
