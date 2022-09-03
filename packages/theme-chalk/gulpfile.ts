import { series, src, dest } from "gulp";
import path from "path";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoPrefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";

function compile() {
  const sass = gulpSass(dartSass);
  return src(path.resolve(__dirname, './src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoPrefixer())
    .pipe(cleanCss())
    .pipe(dest('./dist/css'));
}

function copyfullstyle() {
  const rootDistPath = path.resolve(__dirname, '../../dist/theme-chalk');
  return src(path.resolve(__dirname,'./dist/**'))
    .pipe(dest(rootDistPath));
}

export default series(compile, copyfullstyle);