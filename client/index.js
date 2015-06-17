'use strict';

var io = require('socket.io-client');

// This file is placed into ./build during build.
var env = require('./env_config.json');

var socket = io(env.serverUrl);

socket.on('connect', function() {
    console.log('You have connected.');
});
