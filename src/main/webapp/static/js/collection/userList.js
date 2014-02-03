define([
    'jquery',
    'underscore',
    'backbone',
    'model/user'
], function($, _, Backbone, User){
    var UserList = Backbone.Collection.extend({
        url: '/api/user/',
        model: User
    });

    return UserList;
});