import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/rollup';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions()
  ]
});
