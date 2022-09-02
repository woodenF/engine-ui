import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from 'unocss/vite';
import path from 'path';

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
      output: [
        {
          globals: {
            vue: 'Vue'
          },
          assetFileNames: 'assets/[name].css'
        },
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: '../../es',
          preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: '../../lib',
          preserveModulesRoot: 'src'
        }
      ]
    },
    outDir: path.resolve('../../', 'dist'),
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
