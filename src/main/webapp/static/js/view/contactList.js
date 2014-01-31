define([
    'jquery',
    'underscore',
    'backbone',
    'view/contact',
    'text!templates/contactsTable.jsp'
], function($, _, Backbone, ContactView, tpl) {
    var ContactListView = Backbone.View.extend({
        el: $('#content'),

        attachEvents: function() {
            this.collection.bind('remove', this.remove, this);
        },

        render: function() {
            var self = this;

            this.$el.html($.parseHTML(tpl));
            _.each(this.collection.toArray(), function (contact, i) {
                self.$el.find('tbody').append((new ContactView({model: contact})).render().$el);
            });
            this.attachEvents();
        },

        remove: function(model) {
            this.collection.remove(model);
        }

    });
    return ContactListView;
});
