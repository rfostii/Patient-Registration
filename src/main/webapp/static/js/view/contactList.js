define([
    'jquery',
    'underscore',
    'backbone',
    'view/contact',
    'text!templates/contactsTable.jsp'
], function($, _, Backbone, ContactView, tpl) {
    var ContactListView = Backbone.View.extend({
        el: $('#content'),

        initialize: function() {
            this.$el.html($.parseHTML(tpl));
            this.attachEvents();
        },

        attachEvents: function() {
        },

        render: function() {
            var self = this;

            _.each(this.collection.toArray(), function (contact, i) {
                self.$el.find('tbody').append((new ContactView({model: contact})).render().$el);
            });
        },

        remove: function(model) {
            this.collection.remove(model);
        }

    });
    return ContactListView;
});
