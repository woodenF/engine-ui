import { parallel, series } from "gulp";
import { runTask, withTaskName } from "./src/gulp";
import { run } from "./src/process";
import { copyFile, mkdir } from 'fs/promises';
import { uiOutput } from "./src/paths";

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(uiOutput, {
    recursive: true
  })),
  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    runTask('buildHelper')
  )
)

export * from './src/modules';
export * from './src/type-definition';
export * from './src/helper';
export * from './src/full-bundle';