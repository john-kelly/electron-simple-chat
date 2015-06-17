'use strict';

var gulp = require('gulp');
var electron = require('electron-prebuilt');
var childProcess = require('child_process');

var run = function() {
    var app = childProcess.spawn(electron, ['./build'], {
        stdio: 'inherit'
    });

    var server = childProcess.spawn('node', ['./server'], {
        stdio: 'inherit'
    });

    app.on('close', function(code) {
        // User closed the app. Kill the server and host process.
        server.kill('SIGINT');
        process.exit();
    });

    server.on('close', function(code) {
        // User closed the server. Kill the app and host process.
        app.kill('SIGINT');
        process.exit();
    });
};

gulp.task('default', ['build', 'watch'], run);
