define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    var User = Backbone.Model.extend({
        urlRoot: '/api/user/',
        defaults: {
            firstName: '',
            lastName: '',
            ssn: '',
            dateBirth: '',
            gender: '',
            maritalStatus: '',
            race: '',
            religion: '',
            language: '',
            contact: {},
            employer: {}
        },

        initialize: function() {
            this.on('change', this.change);
        },

        change: function() {
            this.set({
                contact: window.Collections.contact.get(this.get('contact')),
                employer: window.Collections.employer.get(this.get('employer'))
            });
        }
    });

    return User;
});

