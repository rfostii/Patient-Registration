define([
    'jquery',
    'underscore',
    'backbone',
    'collection/contactList',
    'view/contactList',
    'view/topPanel',
    'view/modalContact',
    'model/contact'
], function($, _, Backbone, ContactList, ContactListView, TopPanelView, ModalContactView, ContactModel) {
    var ContactRouter = Backbone.Router.extend({
        routes: {
            "contacts": "showContactList",
            "contact": "showContact"
        },

        initialize: function() {
            this.modalContact = new ModalContactView({ model: new ContactModel() });

            window.Collections.contact = new ContactList();
            this.contactListView = new ContactListView({
                collection: window.Collections.contact
            });
        },

        showContactList: function() {
            var self = this;

            this.modalContact.setForm();
            window.Collections.contact.fetch({
                success: function() {
                    self.contactListView.render();
                },
                error: function() {
                    console.log('error');
                }
            });
            $("#popup-content").show();
        },

        showContact: function() {}
    });

    return ContactRouter;
});