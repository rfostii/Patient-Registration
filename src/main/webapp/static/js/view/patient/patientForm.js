define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseFormView',
    'text!templates/patientForm.jsp'
], function($, _, Backbone, BaseFormView, tpl) {
    var PatientFormView = BaseFormView.extend({

        attachEvents: function() {
            PatientFormView.__super__.attachEvents.apply(this);
        },

        saveModel: function() {
            var self = this;

            this.$el.find('form').off().submit(function(evt) {
                evt.preventDefault();
                var data = $(this).serializeJSON();
                var isValid = self.validationBeforeSend(data);

                if (isValid) {
                    self.save(data);
                    window.RegistrationApp.Collection.Patient.set([self.model], {remove: false});
                    Backbone.history.navigate('/', {trigger: true});
                }
            });
        },

        setForm: function() {
            this.$el.html($.parseHTML(tpl)).hide();
            this.render();
            this.attachEvents();
        },

        renderData: function() {
            this.$el.html(this.template.render({
                data: this.model.toJSON()
            })).show();
        },

        validation: function(attributes) {
            if (!attributes.firstName.length || /(.*\W+.*)|(.*\d+.*)/.test(attributes.firstName)) {
                this.error.push({name: 'firstName', message: 'Wrong first name'})
            }
            if (!attributes.lastName.length || /(.*\W+.*)|(.*\d+.*)/.test(attributes.lastName)) {
                this.error.push({name: 'lastName', message: 'Wrong first name'})
            }
            if (!attributes.ssn.length || /(.*\D+.*)/.test(attributes.ssn)) {
                this.error.push({name: 'ssn', message: 'Wrong ssn'})
            }
            if (!attributes.dateBirth.length) {
                this.error.push({name: 'dateBirth', message: 'Wrong date birth'})
            }
            if (!attributes.language.length || /(.*\W+.*)|(.*\d+.*)/.test(attributes.language)) {
                this.error.push({name: 'language', message: 'Wrong language'})
            }
            return this;
        },

        render: function() {
            this.template = jsviews.templates(tpl);
            this.renderData();
        }

    });

    return PatientFormView;
});