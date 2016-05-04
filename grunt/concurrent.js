module.exports = {

  // Task options
  options: {
    limit: 6
  },

  // Dev tasks
  devFirst: [
    'clean:dist',
    'clean:tmp'
  ],
  devSecond: [
    'jshint'
  ],
  devThird: [
    '<%= preprocessor %>:dev',
    'uglify:scriptsDev',
    'uglify:modulesDev'
  ],
  devFourth: [
    'copy:components'
  ],
  devFifth: [
    'autoprefixer',
    'modernizr'
  ],
  devSixth: [
    'bake:dist'
  ],
  devSeventh: [
    'clean:modules'
  ],

  // Production tasks
  prodFirst: [
    'clean:dist',
    'clean:tmp'
  ],
  prodSecond: [
    'jshint'
  ],
  prodThird: [
    '<%= preprocessor %>:prod',
    'uglify:scriptsProd',
    'uglify:modulesProd'
  ],
  prodFourth: [
    'copy:components'
  ],
  prodFifth: [
    'autoprefixer',
    'modernizr'
  ],
  prodSixth: [
    'cssmin'
  ],
  prodSeventh: [
    'bake:dist'
  ],
  prodEighth: [
    'copy:tmpToDist'
  ],
  prodNinth: [
    'clean:tmp',
    'clean:modules'
  ],

  // Image tasks
  imgFirst: [
    'imagemin'
  ]
};
