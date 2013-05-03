/*global module:false require*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    files: {
      grunt: ['grunt.js'],
      js: ['js/*.js'],
      css:  ['css/*.css']
    },

    concat: {
      dist: {
        src: ['<config:files.css>'],
        dest: 'css/libs/styles.css'
      }
    },

    // min: {
    //   dist: {
    //     src: ['js/randomate.js'],
    //     dest: 'js/randomate.min.js'
    //   }
    // },

    cssmin: {
      dist: {
        src: ['css/libs/styles.css'],
        dest: 'css/libs/styles.min.css'
      }
    },

    lint: {
      files: ['<config:files.grunt>', '<config:files.js>']
    },

    csslint: {
      styles: {
        src: ['css/style.css'],
        rules: {
          // 'import': false,
          'ids': false,
          'font-sizes': false,
          'unqualified-attributes': false,
          'floats': false,
          'overqualified-elements': false,
          'adjoining-classes': false,
          'important': false,
          'box-sizing': false,
          'unique-headings': false,
          'qualified-headings': false,
          'regex-selectors': false,
          'universal-selector': false,
          'duplicate-properties': false,
          'duplicate-background-images': false,
          'box-model': false,
          'outline-none': false,
          'text-indent': false,
          'compatible-vendor-prefixes': false,
          'star-property-hack': false,
          'display-property-grouping': false,
          'underscore-property-hack': false
        }
      }
    },

    watch: {
      files: ['<config:files.grunt>', '<config:files.js>', '<config:files.css>'],
      tasks: 'default'
    },

    jshint: {
      options: {
        jquery: true,
        smarttabs: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },

    uglify: {}
  });

  // load css min/lint plugin
  require('grunt-css')(grunt);

  // Default task.
  // grunt.registerTask('default', 'lint csslint concat min cssmin');
  grunt.registerTask('default', 'csslint concat cssmin');
  // grunt.registerTask('minify', 'min cssmin');
};
