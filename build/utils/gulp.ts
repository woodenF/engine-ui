import type { TaskFunction } from 'gulp';
import { buildRoot } from './paths';
import { run } from './process';

export const withTaskName: <T extends TaskFunction>(name: string, fn: T) => T & { displayName: string } = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name });

export const runTask = (name: string) =>
  withTaskName(`shellTask:${name}`, () =>
    run(`pnpm run start ${name}`, buildRoot)
  );
