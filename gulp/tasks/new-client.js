'use strict';

// Used just to make new clients. Could probably generalize and add to default.

var gulp = require('gulp');
var electron = require('electron-prebuilt');
var childProcess = require('child_process');

var run = function() {
    var app = childProcess.spawn(electron, ['./build'], {
        stdio: 'inherit'
    });
    app.on('close', function(code) {
        // User closed the app. Kill the server and host process.
        process.exit();
    });
};

gulp.task('new-client', run);
