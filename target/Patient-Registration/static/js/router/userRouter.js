define([
    'jquery',
    'underscore',
    'backbone',
    'collection/userList',
    'view/user/userList',
    'view/topPanel',
    'view/user/userForm',
    'model/user'
], function($, _, Backbone, UserList, UserListView, TopPanelView, userFormView, UserModel) {
    var UserRouter = Backbone.Router.extend({
        routes: {
            "users": "showUserList",
            "addUser": "addUser",
            "editUser/:id": "editUser",
            "user/:id": "showUser"
        },

        initialize: function() {
            window.Collections.user = new UserList();
        },

        addUser: function() {
            this.userForm = new userFormView({ model: new UserModel() });
            this.userForm.setForm();
        },

        editUser: function(id) {
            this.userForm = new userFormView({ model: window.Collections.user.get(id) });
            this.userForm.setForm();
        },

        showUserList: function() {
            var self = this;

            this.userListView = new UserListView({
                collection: window.Collections.user
            });

            if (!window.Collections.user.length) {
                window.Collections.user.fetch({
                    success: function() {
                        self.userListView.render();
                    },
                    error: function() {
                        console.log('error');
                    }
                });
            } else {
                self.userListView.render();
            }
        },

        showUser: function(id) {}
    });

    return UserRouter;
});
