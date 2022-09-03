import { run, withTaskName } from "./utils";
import { series, parallel } from "gulp";

export default series(
  withTaskName('clean', async() => run('rm -rf ./dist')),
  withTaskName("buildPackages", () => run("pnpm run --filter ./packages/* --parallel build"))
)