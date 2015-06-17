'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

var lessConfig = require('../config').less;

// TODO Minify and Sourcemaps --> https://github.com/plus3network/gulp-less
var lessTask = function() {
    return gulp.src(lessConfig.src)
    .pipe(less())
    .pipe(gulp.dest(lessConfig.dest));
};

gulp.task('less', ['clean'], lessTask);
