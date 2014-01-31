define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){
    var Employer = Backbone.Model.extend({
        urlRoot: '/api/employer/',
        defaults: {
            name: '',
            contact: {}
        }
    });

    return Employer;
});
