'use strict';

// This script allows you to install native modules (those which have
// to be compiled) for your Electron app.
// The problem is that 'npm install' compiles them against node.js you have
// installed on your computer, NOT against node.js used in Electron
// runtime we've downloaded to this project.
var childProcess = require('child_process');
var gulp = require('gulp');
var jetpack = require('fs-jetpack');

var utils = require('../utils/utils');

gulp.task('npm-install-client', function() {
    var electronVersion = utils.getElectronVersion();
    var nodeModulesDir = jetpack.cwd(__dirname + '/../../client/node_modules');
    //
    // When you raised version of Electron used in your project, the safest
    // thing to do is remove all installed dependencies and install them
    // once again (so they compile against new version if you use any
    // native package).
    nodeModulesDir.dir('.', {empty: true});

    // Tell the 'npm install' which is about to start that we want for it
    // to compile for Electron.
    process.env.npm_config_disturl = 'https://atom.io/download/atom-shell';
    process.env.npm_config_target = electronVersion;

    // Install all dep from the package.json inside the client dir.
    childProcess.spawn(utils.getNpmInstallCommand(), ['install'], {
        cwd: __dirname + '/../../client',
        env: process.env,
        stdio: 'inherit'
    });
});
