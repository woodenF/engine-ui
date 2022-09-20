import { defineConfig, Plugin } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/rollup';

export default defineConfig({
  plugins: [
    vueJsx(),
    DefineOptions() as Plugin
  ]
});
