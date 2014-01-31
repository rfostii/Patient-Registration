define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){
    var Contact = Backbone.Model.extend({
        urlRoot: '/api/contact/',
        defaults: {
            address: '',
            city: '',
            stage: '',
            zip: '',
            phoneNumber: ''
        }
    });

    return Contact;
});