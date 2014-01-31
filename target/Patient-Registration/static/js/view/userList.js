define([
    'jquery',
    'underscore',
    'backbone',
    'view/user',
    'text!templates/usersTable.jsp'
], function($, _, Backbone, UserView, tpl) {
    var UserListView = Backbone.View.extend({
        el: $('#content'),

        attachEvents: function() {
            this.collection.bind('remove', this.remove, this);
        },

        render: function() {
            var self = this;

            this.$el.html($.parseHTML(tpl));
            _.each(this.collection.toArray(), function (user, i) {
                self.$el.find('tbody').append((new UserView({model: user})).render().$el);
            });
            this.attachEvents();
        },

        remove: function(model) {
            this.collection.remove(model);
        }

    });
    return UserListView;
});
