import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from 'unocss/vite';

export default defineConfig({
  plugins: [
    vueJsx(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()]
    })
  ]
});
