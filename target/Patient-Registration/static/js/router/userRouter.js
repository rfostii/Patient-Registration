define([
    'jquery',
    'underscore',
    'backbone',
    'collection/userList',
    'view/userList',
    'view/topPanel',
    'view/userForm',
    'model/user'
], function($, _, Backbone, UserList, UserListView, TopPanelView, userFormView, UserModel) {
    var UserRouter = Backbone.Router.extend({
        routes: {
            "users": "showUserList",
            "addUser": "addUser",
            "editUser/:id": "editUser",
            "user": "showUser"
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
            window.Collections.user.fetch({
                success: function() {
                    self.userListView.render();
                },
                error: function() {
                    console.log('error');
                }
            });
        },

        showUser: function() {}
    });

    return UserRouter;
});
