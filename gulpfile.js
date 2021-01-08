const gulp = require('gulp');

gulp.task('default', (callback) => {
    console.log("Hello World!");
    return callback();
})

const sass = require('gulp-sass');
const mmq = require('gulp-merge-media-queries');
// const cssmin = require('gulp-cssmin');

gulp.task('sass', () => {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(mmq())
        // .pipe(cssmin())
        .pipe(gulp.dest('dist/assets/css/'));
})

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'))
});