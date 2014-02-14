require.config({
    paths: {
        text: '../frameworks/require-text',
        jquery: '../frameworks/jquery',
        underscore: '../frameworks/underscore',
        backbone: '../frameworks/backbone',
        jsrender: '../frameworks/jsrender',
        mask: '../frameworks/mask',
        less: '../frameworks/less',
        jasmine: '../frameworks/jasmine/lib/jasmine-1.3.1/jasmine',
        'jasmine-html': '../frameworks/jasmine/lib/jasmine-1.3.1/jasmine-html',
        bootstrap: '../frameworks/bootstrap/dist/js/bootstrap',
        datepicker: '../frameworks/datepicker/js/bootstrap-datepicker',
        jqueryJson: '../frameworks/jqueryJson',
        templates: '../templates'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        jasmine: {
            exports: "jasmine"
        },
        'jasmine-html': {
            exports: "jasmine-html"
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        bootstrap: {
            deps: ["jquery"],
            exports: "bootstrap"
        },
        datepicker: {
            deps: ["jquery"],
            exports: "datepicker"
        },
        mask: {
            deps: ["jquery"]
        },
        jqueryJson: {
            deps: ["jquery"]
        }
    }
});

require([
    'test/test_app',
    'jsrender',
    'jqueryJson',
    'mask',
    'jasmine',
    'jasmine-html'
], function(){});
