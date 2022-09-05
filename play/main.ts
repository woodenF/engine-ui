import { createApp } from "vue"
import App from './app.vue';
import { Icon } from 'engine-ui';
import 'engine-ui/theme-chalk/index.css';

createApp(App)
  .component('Icon', Icon)
  .mount('#app')