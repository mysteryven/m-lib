const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
var ts = require('gulp-typescript');

const src = path.join(__dirname, './src');
const dist = path.join(__dirname, './dist');
console.log(111);
gulp.task('default', function () {
    return gulp.src([`${src}/**/*.ts`, `!${src}/**/*.test.ts`])
        .pipe(ts())
        .pipe(gulp.dest(dist));
});