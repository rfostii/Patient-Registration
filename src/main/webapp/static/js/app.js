define([
    'jquery',
    'underscore',
    'backbone',
    'Router'
], function($, _, Backbone, Router) {
    (function(){
        window.App = {
            Collections: {}
        };

        new Router();

        Backbone.history.start();
    })();
});