define([
    'jquery',
    'underscore',
    'backbone',
    'collection/contactList',
    'view/contactList',
    'view/topPanel'
], function($, _, Backbone, ContactList, ContactListView, TopPanelView) {
    var ContactRouter = Backbone.Router.extend({
        routes: {
            "contacts": "showContactList",
            "contact": "showContact"
        },

        initialize: function() {
            window.Collections.contact = new ContactList();
            window.Collections.contact.fetch({
                success: function() {
                    contactListView.render();
                },
                error: function() {
                    console.log('error');
                }
            });
        },

        showContactList: function() {
            var contactListView = new ContactListView({
                collection: window.Collections.contact
            });
            $('#content #logo').hide();
            $('#contacts, #employers, #users').hide();
            $('#contacts').show();
        },

        showContact: function() {}
    });

    return ContactRouter;
});