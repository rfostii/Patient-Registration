define([
    'jquery',
    'underscore',
    'backbone',
    'view/user',
    'text!templates/usersTable.jsp'
], function($, _, Backbone, UserView, tpl) {
    var UserListView = Backbone.View.extend({
        el: $('#content'),

        initialize: function() {
            this.$el.html($.parseHTML(tpl));
            this.attachEvents();
        },

        attachEvents: function() {
            this.collection.bind('remove', this.remove, this);
        },

        render: function() {
            var self = this;

            _.each(this.collection.toArray(), function (user, i) {
                self.$el.find('tbody').append((new UserView({model: user})).render().$el);
            });
        },

        remove: function(model) {
            this.collection.remove(model);
        }

    });
    return UserListView;
});
