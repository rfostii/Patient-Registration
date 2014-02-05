define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseFormView',
    'text!templates/userForm.jsp'
], function($, _, Backbone, BaseFormView, tpl) {
    var UserFormView = BaseFormView.extend({

        attachEvents: function() {
            UserFormView.__super__.attachEvents.apply(this);
        },

        saveModel: function() {
            var self = this;

            this.$el.find('form').off().submit(function(evt) {
                evt.preventDefault();
                var data = $(this).serializeJSON();
                var isValid = self.validationBeforeSend(data);

                if (isValid) {
                    self.save(data);
                    window.Collections.user.set([self.model], {remove: false});
                    Backbone.history.navigate('users', {trigger: true});
                }
            });
        },

        setForm: function() {
            this.$el.html($.parseHTML(tpl)).hide();
            this.render();
            this.attachEvents();
        },

        renderData: function() {
            this.$el.find('form').html(this.template.render({
                data: this.model.toJSON(),
                employers: window.Collections.employer.toJSON(),
                contacts: window.Collections.contact.toJSON()
            })).parent().show();
        },

        validation: function(attributes) {
            if (!attributes.firstName.length || /(.*\d+.*)/.test(attributes.firstName)) {
                this.error.push({name: 'firstName', message: 'Wrong first name'})
            }
            if (!attributes.lastName.length || /(.*\d+.*)/.test(attributes.lastName)) {
                this.error.push({name: 'lastName', message: 'Wrong first name'})
            }
            if (!attributes.ssn.length || /(.*\D+.*)/.test(attributes.ssn)) {
                this.error.push({name: 'ssn', message: 'Wrong ssn'})
            }
            if (!attributes.dateBirth.length) {
                this.error.push({name: 'dateBirth', message: 'Wrong date birth'})
            }
            if (!attributes.language.length || /(.*\d+.*)/.test(attributes.language)) {
                this.error.push({name: 'language', message: 'Wrong language'})
            }
            return this;
        },

        render: function() {
            var self = this;

            this.template = jsviews.templates(tpl);

            if (!window.Collections.contact.length || !window.Collections.employer.length) {
                window.Collections.contact.fetch({
                    success: function() {
                        window.Collections.employer.length ? self.renderData() :
                            window.Collections.employer.fetch({
                                success: self.renderData
                            });
                    }
                });
            } else {
                this.renderData();
            }
        }

    });

    return UserFormView;
});