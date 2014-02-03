define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseListView',
    'view/user',
    'text!templates/usersTable.jsp'
], function($, _, Backbone, BaseListView, UserView, tpl) {
    var UserListView = BaseListView.extend({

        render: function() {
            var self = this;

            this.$el.html($.parseHTML(tpl));
            _.each(this.collection.toArray(), function (user, i) {
                self.$el.find('tbody').append((new UserView({model: user})).render().$el);
            });
            this.attachEvents();
        },

        search: function(evt) {
            var self = this;

            this.collection.fetch({
                url: [this.collection.url, $(evt.target).val()].join(''),
                success: function() {
                    self.render();
                }
            });
        },

        remove: function(model) {
            this.collection.remove(model);
        }

    });
    return UserListView;
});
