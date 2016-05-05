module.exports = {

  dist: {
    options: {
      content: '<%= project.src %>/templates/data/data.json'
    },
    files: {
      '<%= project.dist %>/index.html': '<%= project.src %>/templates/index.html'
    }
  }
};
