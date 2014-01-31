define([
    'jquery',
    'underscore',
    'backbone',
    'model/employer'
], function($, _, Backbone, model){
    var EmployerList = Backbone.Collection.extend({
        url: '/api/employer/',
        model: model
    });

    return EmployerList;
});
