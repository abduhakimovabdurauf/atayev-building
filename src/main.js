import './assets/css/style.css';
import { createApp } from 'vue';
import i18n from './i18n';
import App from './App.vue';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const app = createApp(App);

AOS.init({
  duration: 1000,
});

app.provide('i18n', i18n);
app.mount('#app');
