import DefaultTheme from "vitepress/theme";
import DemoBlock from '../components/DemoBlock.vue';
import { Button } from '@engine-ui/components';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: any) {
    app.component('DemoBlock', DemoBlock);
    app.component('Button', Button);
  },
}