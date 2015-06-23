var express = require('express');
var http = require('http');
var io = require('socket.io');
var _ = require('underscore');

var app = express();
var server = http.Server(app);
var webSocketServer = io(server);

app.set('port', (process.env.PORT || 5000));

// Global usernames of users in chatroom.
var usernames = [];

webSocketServer.on('connection', function(client) {
    console.log('a client has connected');

    client.on('login', function(data) {
        var username = data.username;

        if (_.contains(usernames, username)) {
            client.emit('login:status', {status: 'fail'});
        } else {
            usernames.push(username);
            client.emit('login:status', {status: 'ok'});
        }
    });
});

server.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
