define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseFormView',
    'text!templates/employerForm.jsp'
], function($, _, Backbone, BaseFormView, tpl) {
    var EmployerFormView = BaseFormView.extend({

        attachEvents: function() {
            EmployerFormView.__super__.attachEvents.apply(this);
        },

        saveModel: function() {
            var self = this;

            this.$el.find('form').off().submit(function(evt) {
                evt.preventDefault();
                var data = $(this).serializeJSON();
                var isValid = self.validationBeforeSend(data);

                if (isValid) {
                    self.save(data);
                    window.Collections.employer.set([self.model], {remove: false});
                    Backbone.history.navigate('employers', {trigger: true});
                }
            });
        },

        validation: function(attributes) {
            if (!attributes.name.length || /(.*\d+.*)/.test(attributes.name)) {
                this.error.push({name: 'name', message: 'Wrong Name'})
            }
            return this;
        },

        setForm: function() {
            this.$el.html($.parseHTML(tpl)).hide();
            this.render();
            this.attachEvents();
        },

        renderData: function() {
            this.$el.find('form').html(this.template.render({
                data: this.model.toJSON(),
                contacts: window.Collections.contact.toJSON()
            })).parent().show();
        },

        render: function () {
            var self = this;

            this.template = jsviews.templates(tpl);

            window.Collections.contact.length ? this.renderData() :
                window.Collections.contact.fetch({
                    success: self.renderData
                });
        }

    });

    return EmployerFormView;
});