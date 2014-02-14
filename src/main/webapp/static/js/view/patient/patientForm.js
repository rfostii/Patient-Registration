define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseFormView',
    'view/employer/employerSearch',
    'text!templates/patientForm.jsp'
], function($, _, Backbone, BaseFormView, EmployerSearchView, tpl) {
    var PatientFormView = BaseFormView.extend({

        saveModel: function() {
            var self = this;

            this.$el.find('form').off().submit(function(evt) {
                evt.preventDefault();
                var data = $(this).serializeJSON();

                if (self.validationBeforeSend(data)) {
                    self.save(data);
                    Backbone.history.navigate("/", {trigger: true});
                }
            });
        },

        attachDatePicker: function() {
            this.$('input[name=dateBirth]').datepicker();
        },

        setForm: function() {
            this.render();
            this.attachMask();
            this.attachDatePicker();
            this.attachEvents();
            new EmployerSearchView().render();
        },

        validationForm: function(attributes) {
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
            if (attributes.address.length < 10) {
                this.error.push({name: 'address', message: 'Wrong Address'})
            }
            if (!attributes.city.length || /(.*\d+.*)/.test(attributes.city)) {
                this.error.push({name: 'city', message: 'Wrong city Name'})
            }
            if (!attributes.state.length || /(.*\d+.*)/.test(attributes.state)) {
                this.error.push({name: 'state', message: 'Wrong Stage'})
            }
            if (!attributes.phoneNumber.length) {
                this.error.push({name: 'phoneNumber', message: 'Wrong Phone Number'})
            }
            if (!attributes.employer.length) {
                this.error.push({name: 'employer', message: 'Wrong Employer'})
            }
            return this;
        },

        render: function() {
            this.template = jsviews.templates(tpl);
            this.$el.html(this.template.render( this.model.toJSON() ));
        }

    });

    return PatientFormView;
});