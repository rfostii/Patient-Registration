define([
    'jquery',
    'underscore',
    'backbone',
    'model/employer'
], function($, _, Backbone, Employer){
    var EmployerList = Backbone.Collection.extend({
        url: '/api/employer/',
        model: Employer
    });

    return EmployerList;
});
