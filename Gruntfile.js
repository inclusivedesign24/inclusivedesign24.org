
module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {

      options: {
        reporter: require('jshint-stylish'),
        jshintrc: '.jshintrc'
      },
      src: ['*.js']
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src']
      }
    }

  });

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['jshint']);
};
