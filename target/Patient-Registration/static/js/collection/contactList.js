define([
    'jquery',
    'underscore',
    'backbone',
    'model/contact'
], function($, _, Backbone, model){
    var ContactList = Backbone.Collection.extend({
        url: '/api/contact/',
        model: model
    });

    return ContactList;
});