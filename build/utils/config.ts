import path from 'path';
import { outDir } from './paths';

export const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    output: {
      name: "es", // 打包到dist目录下的那个目录
      path: path.resolve(outDir, "es"),
    },
    bundle: {
      path: "z-plus/es",
    },
  },
  cjs: {
    module: "CommonJS",
    format: "cjs",
    output: {
      name: "lib",
      path: path.resolve(outDir, "lib"),
    },
    bundle: {
      path: "z-plus/lib",
    },
  }
}

export type BuildConfig = typeof buildConfig;