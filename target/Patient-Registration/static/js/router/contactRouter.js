define([
    'jquery',
    'underscore',
    'backbone',
    'collection/contactList',
    'view/contact/contactList',
    'view/contact/contactForm',
    'model/contact'
], function($, _, Backbone, ContactList, ContactListView, contactFormView, ContactModel) {
    var ContactRouter = Backbone.Router.extend({
        routes: {
            "contacts": "showContactList",
            "addContact": "addContact",
            "editContact/:id": "editContact",
            "contact": "showContact"
        },

        initialize: function() {
            window.Collections.contact = new ContactList();
            this.repairFormAfterReload = _.bind(this.repairFormAfterReload, this);
        },

        addContact: function() {
            this.contactForm = new contactFormView({ model: new ContactModel() });
            this.contactForm.setForm();
        },

        editContact: function(id) {
            this.getContactDataFromServer({
                success: this.repairFormAfterReload,
                args: id
            });
        },

        repairFormAfterReload: function(id) {
            this.contactForm = new contactFormView({ model: window.Collections.contact.get(id) });
            this.contactForm.setForm();
        },

        getContactDataFromServer: function(handlers) {
            if (!window.Collections.contact.length) {
                window.Collections.contact.fetch({
                    success: function() {
                        handlers.success(handlers.args);
                    },
                    error: function() {
                        console.log('error');
                    }
                });
            } else {
                handlers.success(handlers.args);
            }
        },

        showContactList: function() {
            this.contactListView = new ContactListView({
                collection: window.Collections.contact
            });
            this.getContactDataFromServer({
                success: this.contactListView.render
            });
        },

        showContact: function() {}
    });

    return ContactRouter;
});