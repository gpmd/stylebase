module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {

    jitGrunt: true,
    init: true,

    data: {

      // --env=prod, --env=dev
      env: grunt.option('env') || 'prod',

      // less or sass
      preprocessor: grunt.option('preprocessor') || 'sass',

      // Project paths
      project: {
        src: 'src',
        dist: '<% if (env === "prod") { %>tmp<% } else { %>dist<% } %>'
      },

      // Components
      component: {
        jquery: 'bower_components/jquery/dist/jquery.min.js',
        jquerySourceMap: 'bower_components/jquery/dist/jquery.min.map',
        modernizrDevFile: 'bower_components/modernizr/dist/modernizr-build.js',
        requireJS: 'bower_components/requirejs/require.js',
        loadJS: 'bower_components/loadJS/loadJS.js',
        picturefill: 'bower_components/picturefill/dist/picturefill.min.js',
        equalizeHeights: 'bower_components/equalize-heights/dist/equalize-heights.min.js',
        cssColumns: 'bower_components/CSS3MultiColumn/css3-multi-column.min.js'
      }
    }
  });
};
