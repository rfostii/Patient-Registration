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
                self.$el.find('tbody').append((new ContactView({model: contact})).render().$el);
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
    return ContactListView;
});
