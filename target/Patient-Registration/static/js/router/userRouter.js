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
            this.repairFormAfterReload = _.bind(this.repairFormAfterReload, this);
        },

        addUser: function() {
            this.userForm = new userFormView({ model: new UserModel() });
            this.userForm.setForm();
        },

        editUser: function(id) {
            this.getUserDataFromServer({
                success: this.repairFormAfterReload,
                args: id
            });
        },

        repairFormAfterReload: function(id) {
            this.userForm = new userFormView({ model: window.Collections.user.get(id) });
            this.userForm.setForm();
        },

        getUserDataFromServer: function(handlers) {
            if (!window.Collections.user.length) {
                window.Collections.user.fetch({
                    success: function() {
                        handlers.success(handlers.args);
                    },
                    error: function() {
                        console.log('error');
                    }
                });
            } else {
                handlers.success(handlers.args);
            }
        },

        showUserList: function() {

            this.userListView = new UserListView({
                collection: window.Collections.user
            });
            this.getUserDataFromServer({
                success: this.userListView.render
            });

        },

        showUser: function(id) {}
    });

    return UserRouter;
});
