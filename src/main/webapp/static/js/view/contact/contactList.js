define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseListView',
    'view/contact/contact',
    'collection/contactList',
    'text!templates/contactsTable.jsp',
    'text!templates/contactDetail.jsp'
], function($, _, Backbone, BaseListView, ContactView, ContactList, tpl, detailTpl) {
    var ContactListView = BaseListView.extend({

        initialize: function() {
            ContactListView.__super__.initialize.apply(this);
            this.searchResult = new ContactList();
        },

        selectFoundItem: function(model) {
            var detailTemplate = jsviews.templates(detailTpl);
            this.$el.find('#detail .content').html( detailTemplate.render(model.toJSON()) );
            this.$el.find('#detail').show();
            this.hideSearchResult();
        },

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
            _.each(this.searchResult.toArray(), function (contact, i) {
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
