'use strict';

var gulp = require('gulp');
var jetpack = require('fs-jetpack');

var config = require('../config');

var projectDir = jetpack;

var destDir = projectDir.cwd(config.dest);
var copyTask = function() {
    return projectDir.copyAsync(config.client, destDir.path(), {
        overwrite: true,
        matching: config.toCopy
    });
};
gulp.task('copy', ['clean'], copyTask);
