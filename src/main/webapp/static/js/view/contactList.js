define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseListView',
    'view/contact',
    'text!templates/contactsTable.jsp'
], function($, _, Backbone, BaseListView, ContactView, tpl) {
    var ContactListView = BaseListView.extend({

        render: function() {
            var self = this;

            this.$el.html($.parseHTML(tpl));
            _.each(this.collection.toArray(), function (contact, i) {
                self.$el.find('#contacts tbody').append((new ContactView({model: contact})).render().$el);
            });
            this.attachEvents();
        },

        showSearchResult: function() {
            var self = this;

            self.$el.find(".search-result").html('');
            _.each(this.collection.toArray(), function (contact, i) {
                self.$el.find(".search-result").append((new ContactView({model: contact})).render().$el);
            });
            if (self.$el.find(".search-result").has('tr').length) {
                this.$el.find('#modal').show();
                self.$el.find(".search-result").fadeIn(200);
            }
        }

    });
    return ContactListView;
});
