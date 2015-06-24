'use strict';

// 3rd Party.
var io = require('socket.io-client');

// This file is placed into ./build during build.
var env = require('./env_config.json');

// CONSTANTS
var LOGIN_BUTTON = 'js-login-button';
var MESSAGE_BUTTON = 'js-message-button';
var MESSAGE_TEXTAREA = 'js-message-textarea';
var USERNAME_INPUT = 'js-username-input';
var MESSAGES = 'js-messages';

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

socket.on('broadcast:message', function(data) {
    var message = document.createElement('div');
    message.innerHTML = data.message;

    var messages = document.getElementsByClassName(MESSAGES)[0];
    messages.appendChild(message);
});

// Login button setup.
var loginButton = document.getElementsByClassName(LOGIN_BUTTON)[0];
loginButton.addEventListener('click', function() {
    var usernameInput = document.getElementsByClassName(USERNAME_INPUT)[0];
    var username = usernameInput.value;
    socket.emit('login', {username:username});
});

// Send message button setup.
var messageButton = document.getElementsByClassName(MESSAGE_BUTTON)[0];
messageButton.addEventListener('click', function() {
    var messageTextarea = document.getElementsByClassName(MESSAGE_TEXTAREA)[0];
    var message = messageTextarea.value;
    socket.emit('chat:message', {message:message});
});
