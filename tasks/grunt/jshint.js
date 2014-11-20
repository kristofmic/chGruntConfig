module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  files: [
    // Specify what to lint (and !not lint)
    'assets/js/**/*.js',
    '!assets/js/main/templates_module.js',
    'controllers/**/*.js',
    'test/web/**/*.uspec.js'
  ]
};