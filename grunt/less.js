module.exports = {

  // Development settings
  dev: {
    options: {
      compress: false,
      sourceMap: true
    },
    files: [{
      expand: true,
      cwd: '<%= project.src %>/styles',
      src: ['*.less'],
      dest: '<%= project.dist %>/styles',
      ext: '.css'
    }]
  },

  // Production settings
  prod: {
    options: {
      compress: true,
      sourceMap: false
    },
    files: [{
      expand: true,
      cwd: '<%= project.src %>/styles',
      src: ['*.less'],
      dest: '<%= project.dist %>/styles',
      ext: '.css'
    }]
  }
};
