import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import de from './locales/de.json'
import en from './locales/en.json'

const messages = {
    de,
    en
};

const i18n = createI18n({
    locale: 'de', // Set default locale
    fallbackLocale: 'en', // Fallback locale
    messages,
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');