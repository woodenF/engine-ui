import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { rollup } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/rollup';
import vueJsx from '@vitejs/plugin-vue-jsx';
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild';
import { parallel } from 'gulp';
import { version } from '../../packages/engine-ui/package.json';
import type { Plugin } from 'rollup';
import { uiOutput, uiRoot } from '../utils/paths';
import { formatBundleFilename, generateExternal, writeBundles } from '../utils/rollup';
import { withTaskName } from '../utils/gulp';
import type { TaskFunction } from 'gulp';

const banner = `/*! ${'EngineUI'} v${version} */\n`;

async function buildFullEntry(minify: boolean) {
  const plugins: Plugin[] = [
    {
      name: 'alias-plugin',
      resolveId(id) {
        if(!id.startsWith('@engine-ui/theme-chalk')) {return;}
        return {
          id: id.replaceAll('@engine-ui/theme-chalk', 'engine-ui/theme-chalk'),
          external: 'absolute'
        };
      }
    },
    DefineOptions(),
    vue({
      isProduction: true
    }) as Plugin,
    vueJsx() as Plugin,
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts']
    }),
    commonjs(),
    esbuild({
      exclude: [],
      sourceMap: minify,
      target: 'ES2018',
      loaders: {
        '.vue': 'ts'
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify('production')
      },
      treeShaking: true,
      legalComments: 'eof'
    })
  ];
  if (minify) {
    plugins.push(
      minifyPlugin({
        target: 'ES2018',
        sourceMap: true
      })
    );
  }

  const bundle = await rollup({
    input: path.resolve(uiRoot, 'index.ts'),
    plugins,
    external: await generateExternal({ full: true }),
    treeshake: true
  });
  await writeBundles(bundle, [
    {
      format: 'umd',
      file: path.resolve(
        uiOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'js')
      ),
      exports: 'named',
      name: 'EngineUI',
      globals: {
        vue: 'Vue'
      },
      sourcemap: minify,
      banner
    },
    {
      format: 'esm',
      file: path.resolve(
        uiOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'mjs')
      ),
      sourcemap: minify,
      banner
    }
  ]);
}

export const buildFull = (minify: boolean) => async () =>
  await buildFullEntry(minify);

export const buildFullBundle: TaskFunction = parallel(
  withTaskName('buildFullMinified', buildFull(true)),
  withTaskName('buildFull', buildFull(false))
);
