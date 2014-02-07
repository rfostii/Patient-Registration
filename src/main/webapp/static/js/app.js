define([
    'jquery',
    'underscore',
    'backbone',
    'Router'
], function($, _, Backbone, Router) {
    (function(){
        window.RegistrationApp = {
            Collection: {}
        };
        new Router();

        Backbone.history.start();
    })();
});