import { parallel, series, TaskFunction } from 'gulp';
import { runTask, withTaskName } from './utils/gulp';
import { run } from './utils/process';
import { mkdir, copyFile } from 'fs/promises';
import { buildOutput, projRoot, uiOutput, uiPackage } from './utils/paths';
import path from 'path';
import { buildConfig, Module } from './utils/rollup';
import { copy } from 'fs-extra';

export const copyFiles = () =>
  Promise.all([
    copyFile(uiPackage, path.join(uiOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(uiOutput, 'README.md')
    ),
    copyFile(
      path.resolve(projRoot, 'global.d.ts'),
      path.resolve(uiOutput, 'global.d.ts')
    )
  ]);

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages');
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { recursive: true })
    );

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done);
};

export const copyFullStyle = async () => {
  await mkdir(path.resolve(uiOutput, 'dist'), { recursive: true });
  await copyFile(
    path.resolve(uiOutput, 'theme-chalk/index.css'),
    path.resolve(uiOutput, 'dist/index.css')
  );
};

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(uiOutput, { recursive: true })),

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    series(
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/theme-chalk build')
      ),
      copyFullStyle
    )
  ),
  parallel(copyTypesDefinitions, copyFiles)
);

export * from './src/modules';
export * from './src/full-bundle';
export * from './src/type-definition';
