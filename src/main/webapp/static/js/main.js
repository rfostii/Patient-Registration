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
        datepicker: '../frameworks/datepicker/js/bootstrap-datepicker',
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
    'app',
    'bootstrap',
    'datepicker',
    'jsrender',
    'jqueryJson',
    'less',
    'mask'
], function(){});
