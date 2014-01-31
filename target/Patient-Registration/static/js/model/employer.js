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
        },

        initialize: function() {
            this.on('change', this.change);
        },

        change: function() {
            this.set({
                contact: window.Collections.contact.get(this.get('contact'))
            });
        }
    });

    return Employer;
});
