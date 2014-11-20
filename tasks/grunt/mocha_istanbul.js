module.exports = {
  test: {
    src: [
      // The Mocha setup...order matters
      'test/config/mocha.conf.js',
      'test/config/istanbul.conf.js',
      'test/server/**/*.uspec.js'
    ],
    options: {
      coverage: true,
      coverageFolder: 'test/reports/server/',
      root: '/',
      excludes: [''],
      reportFormats: ['lcov'],
      check: {
        // The requirements
        statements: 90,
        branches: 80,
        functions: 90,
        lines: 90
      }
    }
  }
};