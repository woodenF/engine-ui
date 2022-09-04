import { createApp } from "vue"
import { Icon } from "../dist/engine-ui/es/index.mjs";
import App from './app.vue'

const app = createApp(App).component('Icon', Icon);
app.mount('#app')