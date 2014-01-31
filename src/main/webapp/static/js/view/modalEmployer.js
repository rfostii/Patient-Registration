define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/modalEmployer.jsp'
], function($, _, Backbone, employerTpl) {
    var ModalEmployerView = Backbone.View.extend({
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
                console.log(self.model)
                self.model.save({
                    success: function() {

                    },
                    error: function() {

                    }
                });
                window.Collections.employer.add(self.model);
            });
        },

        setForm: function() {
            this.render();
            this.$el.show().find('button').text('Create New Employer');
            this.$el.find('#popup-form').html($.parseHTML(this.template));
            this.attachEvents();
        },

        render: function () {
            this.template = jsviews.templates(employerTpl);
            this.$el.html(this.template.render(window.Collections.contact.toJSON()));
        }

    });

    return ModalEmployerView;
});