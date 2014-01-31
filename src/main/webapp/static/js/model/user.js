define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){
    var User = Backbone.Model.extend({
        urlRoot: '/api/user/',
        defaults: {
            firtstName: '',
            lastName: '',
            ssn: '',
            dateBirth: '',
            gender: '',
            martitalStatus: '',
            race: '',
            religion: '',
            language: '',
            contact: {}
        }
    });

    return User;
});

