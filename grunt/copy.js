module.exports = {

  // Components
  components: {
    files: [
      {
        expand: true,
        flatten: true,
        src: [
          '<%= component.jquery %>',
          '<%= component.jquerySourceMap %>',
          '<%= component.picturefill %>',
          '<%= component.equalizeHeights %>',
          '<%= component.cssColumns %>'
        ],
        dest: '<%= project.dist %>/scripts/vendor',
        filter: 'isFile'
      }
    ]
  },

  // Tmp dir to dist dir
  tmpToDist: {
    files: [
      {
        expand: true,
        cwd: 'tmp/',
        src: ['**'],
        dest: 'dist/'
      }
    ]
  },
};
