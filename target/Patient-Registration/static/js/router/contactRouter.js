define([
    'jquery',
    'underscore',
    'backbone',
    'collection/contactList',
    'view/contactList',
    'view/topPanel',
    'view/contactForm',
    'model/contact'
], function($, _, Backbone, ContactList, ContactListView, TopPanelView, contactFormView, ContactModel) {
    var ContactRouter = Backbone.Router.extend({
        routes: {
            "contacts": "showContactList",
            "addContact": "addContact",
            "editContact/:id": "editContact",
            "contact": "showContact"
        },

        initialize: function() {
            window.Collections.contact = new ContactList();
        },

        addContact: function() {
            this.contactForm = new contactFormView({ model: new ContactModel() });
            this.contactForm.setForm();
        },

        editContact: function(id) {
            this.contactForm = new contactFormView({ model: window.Collections.contact.get(id) });
            this.contactForm.setForm();
        },

        showContactList: function() {
            var self = this;

            this.contactListView = new ContactListView({
                collection: window.Collections.contact
            });
            window.Collections.contact.fetch({
                success: function() {
                    self.contactListView.render();
                },
                error: function() {
                    console.log('error');
                }
            });
        },

        showContact: function() {}
    });

    return ContactRouter;
});