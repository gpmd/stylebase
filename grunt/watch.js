module.exports = function(grunt, data) {

  // Set output directory to dist
  data.project.dist = 'dist';

  return {

    options: {
      spawn: false,
      livereload: true
    },

    scripts: {
      files: [
        '<%= project.src %>/scripts/**/*.js'
      ],
      tasks: [
        'jshint:scripts',
        'uglify:scriptsDev',
        'uglify:modulesDev'
      ]
    },

    less: {
      files: [
        '<%= project.src %>/styles/**/*.less'
      ],
      tasks: [
        'less:dev'
      ]
    },

    sass: {
      files: [
        '<%= project.src %>/styles/**/*.scss'
      ],
      tasks: [
        'sass:dev'
      ]
    },

    templates: {
      files: [
        '<%= project.src %>/templates/**/*.html'
      ],
      tasks: [
        'htmlbuild:dist'
      ]
    }
  };
};
