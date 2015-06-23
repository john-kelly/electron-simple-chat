'use strict';

// 3rd Party.
var io = require('socket.io-client');

// This file is placed into ./build during build.
var env = require('./env_config.json');

// CONSTANTS
var LOGIN_BUTTON = 'login-btn';
var USERNAME_INPUT = 'username-input';

var socket = io(env.serverUrl);
socket.on('connect', function() {
    console.log('You have connected.');
});

socket.on('login:status', function(data) {
    if (data.status === 'ok') {
        console.log('login ok');
    } else {
        console.log('login failed');
    }
});

// Login button setup.
var loginButton = document.getElementsByClassName(LOGIN_BUTTON)[0];
loginButton.addEventListener('click', function() {
    var usernameInput = document.getElementsByClassName(USERNAME_INPUT)[0];
    var username = usernameInput.value;
    socket.emit('login', {username:username});
});
