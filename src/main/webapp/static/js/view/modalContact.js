define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/modalContact.jsp'
], function($, _, Backbone, contactTpl) {
    var ModalContactView = Backbone.View.extend({
        el: $('#popup-content'),

        initialize: function() {
            this.isEdit = false;
        },

        attachEvents: function() {
            this.$el.on('click', '.save-model', $.proxy( this.saveModel, this ));
            window.Collections.contact.bind('change', this.change, this);
        },

        saveModel: function() {
            var self = this;

            this.render();
            this.$('#myModal').find('form').submit(function(evt) {
                evt.preventDefault();
                self.model.set($(this).serializeJSON());
                console.log(self.model, $(this).serializeJSON())
                self.model.save();
                window.Collections.contact.add(self.model);
            });
        },

        setForm: function() {
            this.$el.show().find('button').text('Create New Contact');
            this.$el.find('#popup-form').html($.parseHTML(contactTpl));
            this.attachEvents();
        },

        render: function() {
            this.template = jsviews.templates(contactTpl);
            this.$el.find('#popup-form').html(this.template.render(this.model.toJSON()));

            if (this.isEdit) {
                this.$el.find('#myModal').modal('show');
                this.isEdit = false;
            }
        },

        change: function(model) {
            this.model = model;
            this.isEdit = true;
            this.render();
        }

    });

    return ModalContactView;
});