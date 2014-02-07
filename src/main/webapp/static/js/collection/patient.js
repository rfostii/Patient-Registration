define([
    'jquery',
    'underscore',
    'backbone',
    'model/patient'
], function($, _, Backbone, Patient){
    var Patient = Backbone.Collection.extend({
        url: '/api/patient/',
        model: Patient
    });

    return Patient;
});