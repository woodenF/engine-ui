import path from 'path'
import { OutputOptions, RollupBuild } from "rollup";
import type { ModuleFormat } from 'rollup'
import { uiOutput, uiPackage } from "./paths";
import { getPackageDependencies } from './pkg';


export const modules = ['esm', 'cjs'] as const
export type Module = typeof modules[number]

export interface BuildInfo {
  module: 'ESNext' | 'CommonJS'
  format: ModuleFormat
  ext: 'mjs' | 'cjs' | 'js'
  output: {
    /** e.g: `es` */
    name: string
    /** e.g: `dist/element-plus/es` */
    path: string
  }

  bundle: {
    /** e.g: `element-plus/es` */
    path: string
  }
}
export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(uiOutput, 'es'),
    },
    bundle: {
      path: `engine-ui/es`,
    },
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: path.resolve(uiOutput, 'lib'),
    },
    bundle: {
      path: `engine-ui/lib`,
    },
  },
}

export const buildConfigEntries = Object.entries(
  buildConfig
) as BuildConfigEntries;

export type BuildConfigEntries = [Module, BuildInfo][]

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map((option) => bundle.write(option)));
}

export const generateExternal = async (options: { full: boolean }) => {
  const { dependencies, peerDependencies } = getPackageDependencies(uiPackage);
  return (id: string) => {
    const packages: string[] = peerDependencies
    if (!options.full) {
      packages.push('@vue', ...dependencies)
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    )
  }
}

export function formatBundleFilename(
  name: string,
  minify: boolean,
  ext: string
) {
  return `${name}${minify ? '.min' : ''}.${ext}`
}