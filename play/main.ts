import { createApp } from "vue"
import App from './app.vue';
import { Button, Icon } from "@engine-ui/components";
import '@engine-ui/theme-chalk/src/index.scss';

createApp(App)
  .component('Icon', Icon)
  .use(Button)
  .use(Icon)
  .mount('#app')