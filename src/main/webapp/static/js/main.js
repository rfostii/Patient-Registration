require.config({
    paths: {
        text: '../frameworks/require-text',
        jquery: '../frameworks/jquery',
        underscore: '../frameworks/underscore',
        backbone: '../frameworks/backbone',
        jsrender: '../frameworks/jsrender',
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
        jqueryJson: {
            deps: ["jquery"],
            exports: "jqueryJson"
        }
    }
});

require([
    'app',
    'bootstrap',
    'jsrender',
    'jqueryJson'
], function(){});
