module.exports = {
  main: {
    src: [
      '<%= htmlPath %>/main/**/*.html'
    ],
    dest: '<%= jsPath %>/main/templates_module.js',
    options: {
      // Module name
      module: 'ch.Main.Templates',
      // Make it a separate module
      standalone: true,
      htmlmin: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true
      },
      url: function(url) {
        var
          urlArr = url.split('/');

        return urlArr[urlArr.length-1];
      }
    }
  }
};