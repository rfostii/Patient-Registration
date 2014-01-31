define([
    'jquery',
    'underscore',
    'backbone',
    'collection/userList',
    'view/userList',
    'view/topPanel',
    'view/modalUser',
    'model/user'
], function($, _, Backbone, UserList, UserListView, TopPanelView, ModalUserView, UserModel) {
    var UserRouter = Backbone.Router.extend({
        routes: {
            "users": "showUserList",
            "user": "showUser"
        },

        initialize: function() {
            this.modalUser = new ModalUserView({ model: new UserModel() });
            window.Collections.user = new UserList();
            this.userListView = new UserListView({
                collection: window.Collections.user
            });
        },

        showUserList: function() {
            var self = this;

            this.modalUser.setForm();
            window.Collections.user.fetch({
                success: function() {
                    self.userListView.render();
                },
                error: function() {
                    console.log('error');
                }
            });
            $("#popup-content").show();
        },

        showUser: function() {}
    });

    return UserRouter;
});
