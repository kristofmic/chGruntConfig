module.exports = {
  components: {
    src: [
      // Bring in your Bower components
      '<%= componentsPath %>/angular/angular.js'
    ],
    dest: '<%= pubJsPath %>/components.js'
  },
  main: {
    options: {
      process: function(src, filepath) {
        return '\n// ' + filepath + '\n' + src;
      }
    },
    src: [
      // Bring in your client-side JS files
      '<%= jsPath %>/vendor/lodash_module.js',
      '<%= jsPath %>/main/**/*.js',
    ],
    dest: '<%= pubJsPath %>/main.js'
  }
};
