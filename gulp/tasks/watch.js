'use strict';

var gulp = require('gulp');

var config = require('../config');

// TODO refactor watch logic.
gulp.task('watch', ['build'], function() {
    // These can probably be optimized.
    // When anything changes, rebuild everything.
    gulp.watch(config.toCopy, ['build']);
    // When anything changes, rebuild everything.
    gulp.watch(config.less.src, ['build']);
});
