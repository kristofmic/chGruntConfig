module.exports = {
  components: {
    expand: true,
    src: [
      // Copy Bower components
      '<%= componentsPath %>/bootstrap/dist/css/bootstrap.min.css'
    ],
    dest: '<%= pubCssPath %>/',
    flatten: true,
    filter: 'isFile'
  },
  fonts: {
    expand: true,
    src: [
      // Copy fonts
      '<%= componentsPath %>/fontawesome/fonts/*',
    ],
    dest: '<%= pubFontPath %>/',
    flatten: true,
    filter: 'isFile'
  }
};