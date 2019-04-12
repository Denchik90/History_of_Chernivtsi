'use strict';

let     gulp            = require('gulp'),
        sass            = require('gulp-sass'),
        sourcemaps      = require('gulp-sourcemaps'),
        autoprefixer    = require('gulp-autoprefixer'),
        pug             = require('gulp-pug'),
        browserSync     = require('browser-sync').create();
        sass.compiler   = require('node-sass');

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('sass', function () {
return gulp.src('./sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('views', function buildHTML() {
    return gulp.src('./pug/*.pug')
        .pipe(pug({
            pretty: true,
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/*.sass', gulp.series('sass'));
    gulp.watch('./pug/**/*.pug', gulp.series('views'));
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default',gulp.series(
                        gulp.parallel('sass:watch','serve')),
                    gulp.series(
                        gulp.parallel('sass','views')));