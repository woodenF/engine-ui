import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from 'unocss/vite';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()]
    })
  ],
  build: {
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: 'assets/[name].css'
      }
    },
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true,
    lib: {
      entry: './index.ts',
      name: 'EngineUI',
      fileName: 'engine-ui',
      formats: ['es', 'umd', 'iife'] // 导出模块类型
    }
  }
});
