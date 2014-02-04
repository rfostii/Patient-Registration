define([
    'jquery',
    'underscore',
    'model/baseModel'
], function($, _, BaseModel){
    var User = BaseModel.extend({
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
            this.change = _.bind(this.change, this);
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

