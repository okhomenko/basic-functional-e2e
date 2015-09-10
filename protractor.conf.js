require('babel-core/register');

exports.config = {

    framework: 'jasmine2',

    multiCapabilities: [
        //{
        //    browserName: 'phantomjs'
        //},
        {
            browserName: 'chrome'
        },
    ],

    suites: {
        smokes: 'tests/smoketests/*.js',
        app: 'tests/*Spec.js'
    },

    // Direct connect to Chrome, other browsers can work only through webdriver (Selenium)
    //directConnect: true

};
