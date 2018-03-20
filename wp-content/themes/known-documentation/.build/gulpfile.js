'use strict';

var gulp = require('gulp');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var path = './../';

gulp.task('sass', function () {
    return gulp.src(path+'/styles/**/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer())
        .pipe(concat('style.css'))
        .pipe(gulp.dest(path));
});

gulp.task('scripts', function() {
    return gulp.src([
        path+'/.build/node_modules/jquery/dist/jquery.min.js',
        path+'/.build/node_modules/airtable/build/airtable.browser.js',
        path+'/.build/node_modules/axios/dist/axios.min.js',
        path+'/js/src/**/*.js'
    ])
        .pipe(concat('all.js'))
        //.pipe(minify())
        .pipe(gulp.dest(path+'/js/dist/'));
});

gulp.task('default', function(){
    gulp.watch(path+'/styles/**/*.scss', ['sass']);
    gulp.watch(path+'/js/src/*.js', ['scripts'])
});
