'use strict';

var gulp = require('gulp');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./../styles/**/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./../'));
});

gulp.task('scripts', function() {
    return gulp.src([
        './bower_components/jquery/dist/jquery.min.js',
        './node_modules/jquery-ui/ui/widget.js',
        './node_modules/jquery-ui/ui/version.js',
        './node_modules/jquery-ui/ui/position.js',
        './node_modules/jquery-ui/ui/keycode.js',
        './node_modules/jquery-ui/ui/unique-id.js',
        './node_modules/jquery-ui/ui/widgets/autocomplete.js',
        './node_modules/jquery-ui/ui/widgets/menu.js',
        './node_modules/rellax/rellax.min.js',
        './../js/src/**/*.js'
    ])
        .pipe(concat('all.js'))
        //.pipe(minify())
        .pipe(gulp.dest('./../js/dist/'));
});

gulp.task('default', function(){
    gulp.watch('./../styles/**/*.scss', ['sass']);
    gulp.watch('./../js/src/*.js', ['scripts'])
});
