const webpackConfig = require('../../build/webpack.test.config');

module.exports = function(config) {
    const configuration = {
        browsers: ['ChromeHeadless'],
        frameworks: ['mocha', 'sinon-chai'],
        reporters: ['spec', 'coverage'],
        files: [
            'index.js',
        ],
        preprocessors: {
            'index.js': ['webpack', 'sourcemap'],
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
        },
        // optionally, configure the reporter
        coverageReporter: {
            dir: '../../coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' },
                { type: 'cobertura', subdir: '.' },
                { type: 'json', subdir: '.' },
            ],
        },
        client: {
            mocha: {
                timeout: 4000,
            },
        },
    };

    config.set(configuration);
};
