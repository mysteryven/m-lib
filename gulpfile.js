const path = require('path');
const gulp = require('gulp');
var ts = require('gulp-typescript');

const src = path.join(__dirname, './src');
const dist = path.join(__dirname, './dist');

gulp.task('default', function () {
    return gulp.src([`${src}/**/*.ts`, `!${src}/**/*.test.ts`])
        .pipe(ts())
        .pipe(gulp.dest(dist));
});