define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/modalContact.jsp'
], function($, _, Backbone, contactTpl) {
    var ModalContactView = Backbone.View.extend({
        el: $('#popup-content'),

        attachEvents: function() {
            this.$el.off();
            this.$el.on('click', '.save-model', $.proxy( this.saveModel, this ));
        },

        saveModel: function() {
            var self = this;

            this.$('#myModal').find('form').submit(function(evt) {
                evt.preventDefault();
                self.model.set($(this).serializeJSON());
                console.log(self.model, $(this).serializeJSON())
                self.model.save({
                    success: function() {

                    },
                    error: function() {

                    }
                });
                window.Collections.contact.add(self.model);
            });
        },

        setForm: function() {
            this.$el.show().find('button').text('Create New Contact');
            this.$el.find('#popup-form').html($.parseHTML(contactTpl));
            this.attachEvents();
        }

    });

    return ModalContactView;
});