define([
    'jquery',
    'underscore',
    'backbone',
    'collection/userList',
    'view/userList',
    'view/topPanel'
], function($, _, Backbone, UserList, UserListView, TopPanelView) {
    var UserRouter = Backbone.Router.extend({
        routes: {
            "users": "showUserList",
            "user": "showUser"
        },

        initialize: function() {
            window.Collections.user = new UserList();
            window.Collections.user.fetch({
                success: function() {
                    userListView.render();
                },
                error: function() {
                    console.log('error');
                }
            });
        },

        showUserList: function() {
            var userListView = new UserListView({
                collection: window.Collections.user
            });
            $('#content #logo').hide();
            $('#contacts, #employers, #users').hide();
            $('#users').show();
        },

        showUser: function() {}
    });

    return UserRouter;
});
