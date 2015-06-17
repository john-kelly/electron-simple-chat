var express = require('express');
var http = require('http');
var io = require('socket.io');

var app = express();
var server = http.Server(app);
var webSocketServer = io(server);

app.set('port', (process.env.PORT || 5000));

webSocketServer.on('connection', function(socket) {
    console.log('a user connected');
});

server.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
