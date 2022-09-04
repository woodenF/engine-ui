import { resolve } from 'path';

export const projRoot = resolve(__dirname, '..', '..');

export const pkgRoot = resolve(projRoot, 'packages');

export const uiRoot = resolve(pkgRoot, 'engine-ui');

export const buildOutput = resolve(projRoot, 'dist');

export const uiOutput = resolve(buildOutput, 'engine-ui');

export const buildRoot = resolve(projRoot, 'build');

export const uiPackage = resolve(uiRoot, 'package.json');