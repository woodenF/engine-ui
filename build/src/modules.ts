import glob from 'fast-glob';
import { Plugin, rollup } from 'rollup';
import DefineIOptions from 'unplugin-vue-define-options/rollup';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import { buildConfigEntries, generateExternal, writeBundles } from '../utils/rollup';
import type { OutputOptions } from 'rollup';
import { excludeFiles } from '../utils/pkg';
import { pkgRoot, uiRoot } from '../utils/paths';

export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true
    })
  );

  const bundle = await rollup({
    input,
    plugins: [
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
      DefineIOptions() as Plugin,
      vue({
        isProduction: false
      }) as Plugin,
      vueJsx() as Plugin,
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts']
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'es2018',
        loaders: {
          '.vue': 'ts'
        }
      })
    ],
    external: await generateExternal({ full: false }),
    treeshake: false
  });
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: uiRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`
      };
    })
  );
};
