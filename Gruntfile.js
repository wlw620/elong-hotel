'use strict';

// config
const config = require('./build/config');
const webpackConfig = config.webpack;
const sassConfig = config.sass;
const connectConfig = config.connect;
const watchConfig = config.watch;

module.exports = function(grunt) {

    // grunt config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            src: './src/',
            dist: './dist/'
        },
        sass: sassConfig,
        webpack: {
            app: webpackConfig
        },
        connect: connectConfig,
        watch: watchConfig,
        clean: {
            dist: ['<%= paths.dist %>']
        }
    });

    // Load the grunt plugins
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    //grunt tasks
    grunt.registerTask('default', ['clean:dist', 'webpack', 'sass']);
    grunt.registerTask('serve', ['connect:all', 'watch']);
};
