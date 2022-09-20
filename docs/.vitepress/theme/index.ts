import DefaultTheme from "vitepress/theme";
import DemoBlock from '../components/DemoBlock.vue';
import '@engine-ui/theme-chalk/src/index.scss';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: any) {
    app.component('DemoBlock', DemoBlock);
  },
}