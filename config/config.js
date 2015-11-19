var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'exangular'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGOLAB_URI || 'mongodb://localhost/exangular-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'exangular'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGOLAB_URI || 'mongodb://localhost/exangular-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'exangular'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGOLAB_URI || 'mongodb://localhost/exangular-production'
  }
};

module.exports = config[env];
