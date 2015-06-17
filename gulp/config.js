'use strict';

var dest = './build';
var client = './client';

module.exports = {

    dest: dest,

    client: client,

    toCopy: [
        'client/**/*.js',
        'client/node_modules/**',
        'client/bower_components/**',
        'client/vendor/**',
        'client/**/*.html'
    ],

    less: {
        src: client + '/stylesheets/**/*.less',
        dest: dest + '/stylesheets',
    },
    images: {
        src: client + '/images/**',
        dest: dest + '/images'
    },
};
