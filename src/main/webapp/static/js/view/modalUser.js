define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/modalUser.jsp'
], function($, _, Backbone, userTpl) {
    var ModalUserView = Backbone.View.extend({
        el: $('#popup-content'),

        initialize: function() {
            this.isEdit = false;
            this.renderData = _.bind(this.renderData, this);
        },

        attachEvents: function() {
            this.$el.on('click', '.save-model', $.proxy( this.saveModel, this ));
            window.Collections.user.bind('change', this.change, this);
        },

        saveModel: function() {
            var self = this;

            this.$('#myModal').find('form').submit(function(evt) {
                evt.preventDefault();
                self.model.set($(this).serializeJSON());
                console.log(self.model, $(this).serializeJSON());
                self.model.save();
                window.Collections.user.add(self.model);
            });
        },

        setForm: function() {
            this.render();
            this.$el.show().find('button').text('Create New User');
            this.$el.find('#popup-form').html($.parseHTML(userTpl));
            this.attachEvents();
        },

        renderData: function() {
            this.$el.find('#popup-form').html(this.template.render({
                data: this.model.toJSON(),
                employers: window.Collections.employer.toJSON(),
                contacts: window.Collections.contact.toJSON()
            }));

            if (this.isEdit) {
                this.$el.find('#myModal').modal('show');
                this.isEdit = false;
            }
        },

        change: function(model) {
            this.model = model;
            this.isEdit = true;
            this.render();
        },

        render: function() {
            var self = this;

            this.template = jsviews.templates(userTpl);
            window.Collections.contact.fetch({
                success: function() {
                    window.Collections.employer.fetch({
                        success: self.renderData
                    });
                }
            });
        }

    });

    return ModalUserView;
});