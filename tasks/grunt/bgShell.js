module.exports = {
  // For starting the server
  server: {
    cmd: 'nodemon ./bin/www'
  },
  // For running protractor tests
  protractor: {
    cmd: 'protractor test/config/protractor.conf.js'
  }
};