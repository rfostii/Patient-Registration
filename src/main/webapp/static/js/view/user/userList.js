define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseListView',
    'view/user/user',
    'text!templates/usersTable.jsp'
], function($, _, Backbone, BaseListView, UserView, tpl) {
    var UserListView = BaseListView.extend({

        render: function() {
            var self = this;

            this.$el.html($.parseHTML(tpl));
            _.each(this.collection.toArray(), function (user, i) {
                self.$el.find('#users tbody').append((new UserView({model: user})).render().$el);
            });
            this.attachEvents();
        },

        showSearchResult: function() {
            var self = this;

            self.$el.find(".search-result").html('');
            _.each(this.collection.toArray(), function (user, i) {
                self.$el.find(".search-result").append((new UserView({model: user})).render().$el);
            });
            if (self.$el.find(".search-result").has('tr').length) {
                this.$el.find('#modal').show();
                self.$el.find(".search-result").fadeIn(200);
            }
        }

    });
    return UserListView;
});
