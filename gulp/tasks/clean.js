var gulp = require('gulp');
var jetpack = require('fs-jetpack');

var dest = require('../config').dest;

var projectDir = jetpack;
var destDir = projectDir.cwd(dest);

gulp.task('clean', function(callback) {
    return destDir.dirAsync('.', {empty: true});
});
