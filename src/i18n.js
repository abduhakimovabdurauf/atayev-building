import { createI18n } from 'vue-i18n';
import uz from './locales/uz.json';
import ru from './locales/ru.json';
import en from './locales/en.json';

const messages = {
  uz,
  ru,
  en,
};

const i18n = createI18n({
  locale: 'uz',
  messages,
});

export default i18n;
