// Karma configuration
// Generated on Thu Sep 22 2016 15:35:44 GMT-0300 (BRT)

var path = require('path');

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
//      'build/bundle.js',
      'src/index.js',
      'test/**/*.js'
    ],

    plugin: [
      'karma-coverage'
    ],

    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap', 'coverage'],
      'test/**/*.js': ['webpack']
    },

    webpack: {

      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ],
      },
      watch: true
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress', 'coverage', 'coveralls'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'lcov',
          subdir: 'report-lcov'
        }
      ]
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
