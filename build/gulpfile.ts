import { parallel, series } from 'gulp';
import { runTask, withTaskName } from './utils/gulp';
import { run } from './utils/process';
import { mkdir } from 'fs/promises';
import { uiOutput } from './utils/paths';

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(uiOutput, { recursive: true })),
  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions')
  )
);

export * from './src/modules';
export * from './src/full-bundle';
export * from './src/type-definition';
