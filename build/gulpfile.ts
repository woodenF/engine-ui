import { run, withTaskName } from "./utils";
import { series, parallel } from "gulp";
import { genTypes } from "./gen-types";
import { outDir, uiRoot } from "./utils/paths";

const copySourceCode = () => async () => {
  await run(`cp ${uiRoot}/package.json ${outDir}/package.json`);
};

export default series(
  withTaskName('clean', async() => run('rm -rf ./dist')),
  parallel(
    withTaskName("buildPackages", () => run("pnpm run --filter ./packages/* --parallel build")),
    withTaskName("buildFullComponent", () => run("pnpm run build buildFullComponent")),
    withTaskName("buildComponent", () => run("pnpm run build buildComponent"))
  ),
  parallel(genTypes, copySourceCode())
)

export * from "./full-component";
export * from "./component";