define([
    'jquery',
    'underscore',
    'backbone',
    'model/user'
], function($, _, Backbone, model){
    var UserList = Backbone.Collection.extend({
        url: '/api/user/',
        model: model
    });

    return UserList;
});