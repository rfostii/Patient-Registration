define([
    'jquery',
    'underscore',
    'backbone',
    'model/contact'
], function($, _, Backbone, Contact){
    var ContactList = Backbone.Collection.extend({
        url: '/api/contact/',
        model: Contact
    });

    return ContactList;
});