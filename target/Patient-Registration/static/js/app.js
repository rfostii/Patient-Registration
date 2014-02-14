define([
    'jquery',
    'underscore',
    'backbone',
    'Router'
], function($, _, Backbone, Router) {
    (function() {
        new Router();
        Backbone.history.start();
    })();
});