import { createApp } from 'vue';
import App from './app.vue';
import { Icon } from '@engine-ui/components/icon';

createApp(App)
  .use(Icon)
  .mount('#app');