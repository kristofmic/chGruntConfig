module.exports = gruntConfig;

function gruntConfig(grunt) {
  var
    pkg = grunt.file.readJSON('package.json'),
    tasks = require('./tasks/grunt'),
    gruntInitConfig;

  gruntInitConfig = {
    // Set these to the appropriate directories
    jsPath: 'assets/js',
    componentsPath: 'assets/components',
    cssPath: 'assets/css',
    htmlPath: 'assets/templates',
    imagePath: 'assets/img',
    fontPath: 'assets/fonts',
    pubJsPath: 'public/js',
    pubCssPath: 'public/css',
    pubImagePath: 'public/img',
    pubFontPath: 'public/fonts'
  };

  for (var task in tasks) {
    gruntInitConfig[task] = tasks[task];
  }

  grunt.initConfig(gruntInitConfig);

  for (var dep in pkg.devDependencies) {
    if (dep !== 'grunt' && !dep.indexOf('grunt')) {
      grunt.loadNpmTasks(dep);
    }
  }

  grunt.registerTask('build:dev', [
    'copy',
    'ngtemplates',
    'concat',
    'sass:dev'
  ]);
  grunt.registerTask('build:dist', [
    'build:dev',
    'sass:dist',
    'uglify'
  ]);
  grunt.registerTask('build:watch', [
    'build:dist',
    'watch'
  ]);
  grunt.registerTask('protractor:dev', [
    'env:dev',
    'bgShell:protractor'
  ]);
  grunt.registerTask('protractor:dist', [
    'env:test',
    'bgShell:protractor'
  ]);
  grunt.registerTask('test:dev', [
    'env:test',
    'jshint',
    'karma:dev',
    'protractor:dev',
    'mocha_istanbul:test'
  ]);
  grunt.registerTask('test:dist', [
    'env:test',
    'jshint',
    // Run the dev tests for the coverage reporting
    'karma:dev',
    // Re-run the dist tests to ensure minified version passes
    'karma:dist',
    'protractor:dist',
    'mocha_istanbul:test'
  ]);
  grunt.registerTask('server', [
    'env:dev',
    'bgShell:server'
  ]);
  grunt.registerTask('default', [
    'build:dist',
    'server'
  ]);
}