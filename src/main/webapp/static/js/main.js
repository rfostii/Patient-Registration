require.config({
    paths: {
        text: '../frameworks/require-text',
        jquery: '../frameworks/jquery',
        underscore: '../frameworks/underscore',
        backbone: '../frameworks/backbone',
        jsrender: '../frameworks/jsrender',
        mask: '../frameworks/mask',
        less: '../frameworks/less',
        bootstrap: '../frameworks/bootstrap/dist/js/bootstrap',
        jqueryJson: '../frameworks/jqueryJson',
        templates: '../templates'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        bootstrap: {
            deps: ["jquery"],
            exports: "bootstrap"
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
    'app',
    'bootstrap',
    'jsrender',
    'jqueryJson',
    'less',
    'mask'
], function(){});
