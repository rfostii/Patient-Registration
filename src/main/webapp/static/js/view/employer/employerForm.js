define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseFormView',
    'text!templates/employerForm.jsp'
], function($, _, Backbone, BaseFormView, tpl) {
    var EmployerFormView = BaseFormView.extend({

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

        validationForm: function(attributes) {
            if (!attributes.name.length || /(.*\d+.*)/.test(attributes.name)) {
                this.error.push({name: 'name', message: 'Wrong Name'})
            }
            if (attributes.address.length < 10) {
                this.error.push({name: 'address', message: 'Wrong Address'})
            }
            if (!attributes.city.length || /(.*\d+.*)/.test(attributes.city)) {
                this.error.push({name: 'city', message: 'Wrong city Name'})
            }
            if (!attributes.state.length || /(.*\d+.*)/.test(attributes.state)) {
                this.error.push({name: 'state', message: 'Wrong State'})
            }
            if (!attributes.phoneNumber.length) {
                this.error.push({name: 'phoneNumber', message: 'Wrong Phone Number'})
            }
            return this;
        },

        setForm: function() {
            this.render();
            this.attachEvents();
            this.attachMask();
        },

        render: function () {
            this.$el.html($.parseHTML(tpl));
        }

    });

    return EmployerFormView;
});