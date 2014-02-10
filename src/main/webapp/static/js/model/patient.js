define([
    'jquery',
    'underscore',
    'model/baseModel'
], function($, _, BaseModel){
    var Patient = BaseModel.extend({
        urlRoot: '/api/patient/',
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
            address: '',
            city: '',
            state: '',
            zip: '',
            phoneNumber: '',
            employer: {}
        },

        initialize: function() {
            this.change = _.bind(this.change, this);
            this.on('change', this.change);
        },

        change: function() {
            this.set({
                employer: window.App.Collections.employer.get(this.get('employer'))
            });
        }
    });

    return Patient;
});

