define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseFormView',
    'text!templates/contactForm.jsp'
], function($, _, Backbone, BaseViewForm, tpl) {
    var ContactFormView = BaseViewForm.extend({

        initialize: function() {
            this.error = [];
        },

        attachEvents: function() {
            ContactFormView.__super__.attachEvents.apply(this);
        },

        attachMask: function() {
            this.$el.find("input[name=phoneNumber]").mask('(000) 000-0000');
            this.$el.find("input[name=zip]").mask('00000-000');
        },

        saveModel: function() {
            var self = this;

            this.$el.find('form').off().submit(function(evt) {
                evt.preventDefault();
                var data = $(this).serializeJSON();
                var isValid = self.validationBeforeSend(data);

                if (isValid) {
                    self.save(data);
                    window.Collections.contact.set([self.model], {remove: false});
                    Backbone.history.navigate('contacts', {trigger: true});
                }
            });
        },

        validation: function(attributes) {
            if (attributes.address.length < 10) {
                this.error.push({name: 'address', message: 'Wrong Address'})
            }
            if (!attributes.city.length || /(.*\d+.*)/.test(attributes.city)) {
                this.error.push({name: 'city', message: 'Wrong city Name'})
            }
            if (!attributes.stage.length || /(.*\d+.*)/.test(attributes.stage)) {
                this.error.push({name: 'stage', message: 'Wrong Stage'})
            }
            if (!attributes.zip.length || attributes.zip.length < 5) {
                this.error.push({name: 'zip', message: 'Wrong zip Code'})
            }
            if (!attributes.phoneNumber.length) {
                this.error.push({name: 'phoneNumber', message: 'Wrong Phone Number'})
            }
            return this;
        },

        setForm: function() {
            this.$el.html($.parseHTML(tpl)).hide();
            this.render();
            this.attachEvents();
            this.attachMask();
        },

        render: function() {
            this.template = jsviews.templates(tpl);
            this.$el.find('form').html(this.template.render(this.model.toJSON())).parent().show();
        }

    });

    return ContactFormView;
});