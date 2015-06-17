'use strict';

var gulp = require('gulp');
var electron = require('electron-prebuilt');
var childProcess = require('child_process');

var runApp = function() {
    var app = childProcess.spawn(electron, ['./build'], {
        stdio: 'inherit'
    });

    app.on('close', function(code) {
        // User closed the app. Kill the host process.
        process.exit();
    });
};

gulp.task('default', ['build', 'watch'], runApp);
