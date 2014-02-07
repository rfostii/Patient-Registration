define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseListView',
    'view/user/user',
    'collection/userList',
    'text!templates/usersTable.jsp',
    'text!templates/userDetail.jsp'
], function($, _, Backbone, BaseListView, UserView, UserList, tpl, detailTpl) {
    var UserListView = BaseListView.extend({

        initialize: function() {
            UserListView.__super__.initialize.apply(this);
            this.searchResult = new UserList();
        },

        selectItem: function(model) {
            var detailTemplate = jsviews.templates(detailTpl);
            this.$el.find('#detail .content').html( detailTemplate.render(model.toJSON()) );
            this.$el.find('#detail').show();
            this.hideSearchResult();
        },

        render: function() {
            var self = this;

            this.$el.html($.parseHTML(tpl));
            _.each(this.collection.toArray(), function (user, i) {
                self.$el.find('#users tbody').append((new UserView({model: user})).render().$el);
            });
            this.attachEvents();
        },

        showSearchResult: function(query) {
            var self = this;

            self.$el.find(".search-result").html('');
            _.each(this.searchResult.toArray(), function (user, i) {
                self.$el.find(".search-result").append((new UserView({model: user})).backlightRender(query).$el);
            });
            if (self.$el.find(".search-result").has('tr').length) {
                this.$el.find('#modal').show();
                self.$el.find(".search-result").fadeIn(200);
            }
        }

    });
    return UserListView;
});
