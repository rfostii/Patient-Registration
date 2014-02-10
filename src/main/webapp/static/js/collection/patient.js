define([
    'jquery',
    'underscore',
    'backbone',
    'model/patient'
], function($, _, Backbone, Patient){
    var PatientList = Backbone.Collection.extend({
        url: '/api/patient/',
        model: Patient
    });

    return PatientList;
});