module.exports = {
  // Concating
  dev: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= pubCssPath %>/main.css': '<%= cssPath %>/main/main.scss'
    }
  },
  // Concating and minifying
  dist: {
    options: {
      style: 'compressed'
    },
    files: {
      '<%= pubCssPath %>/main.min.css': '<%= pubCssPath %>/main.css'
    }
  }
};