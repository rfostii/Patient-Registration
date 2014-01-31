define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/modalEmployer.jsp'
], function($, _, Backbone, employerTpl) {
    var ModalEmployerView = Backbone.View.extend({
        el: $('#popup-content'),

        initialize: function() {
            this.isEdit = false;
            this.renderData = _.bind(this.renderData, this);
        },

        attachEvents: function() {
            this.$el.on('click', '.save-model', $.proxy( this.saveModel, this ));
            window.Collections.employer.bind('change', this.change, this);
        },

        saveModel: function() {
            var self = this;

            this.$('#myModal').find('form').submit(function(evt) {
                evt.preventDefault();
                self.model.set($(this).serializeJSON());
                console.log(self.model)
                self.model.save();
                window.Collections.employer.add(self.model);
            });
        },

        setForm: function() {
            this.render();
            this.$el.show().find('button').text('Create New Employer');
            this.$el.find('#popup-form').html($.parseHTML(this.template));
            this.attachEvents();
        },

        renderData: function() {
            this.$el.find('#popup-form').html(this.template.render({
                data: this.model.toJSON(),
                contacts: window.Collections.contact.toJSON()
            }));

            if (this.isEdit) {
                this.$el.find('#myModal').modal('show');
                this.isEdit = false;
            }
        },

        render: function () {
            var self = this;

            this.template = jsviews.templates(employerTpl);
            window.Collections.contact.fetch({
                success: self.renderData
            });
        },

        change: function(model) {
            this.model = model;
            this.isEdit = true;
            this.render();
        }

    });

    return ModalEmployerView;
});