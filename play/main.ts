import { createApp } from 'vue';
import App from './app.vue';
import { Icon } from '../dist/es';

createApp(App)
  .use(Icon)
  .mount('#app');