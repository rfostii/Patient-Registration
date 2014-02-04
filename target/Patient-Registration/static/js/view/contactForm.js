define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseFormView',
    'text!templates/contactForm.jsp'
], function($, _, Backbone, BaseViewForm, tpl) {
    var ContactFormView = BaseViewForm.extend({

        initialize: function() {},

        attachEvents: function() {
            ContactFormView.__super__.attachEvents.apply(this);
        },

        saveModel: function() {
            var self = this;

            this.$el.find('form').submit(function(evt) {
                evt.preventDefault();
                self.model.set($(this).serializeJSON());
                self.model.save({
                    success: function() {
                        self.undelegateEvents();
                        self.remove();
                    }
                });
                if (!window.Collections.contact.findWhere(self.model)) {
                    window.Collections.contact.add(self.model);
                }
                Backbone.history.navigate('contacts', {trigger: true});
            });
        },

        setForm: function() {
            this.$el.html($.parseHTML(tpl)).hide();
            this.render();
            this.attachEvents();
        },

        render: function() {
            this.template = jsviews.templates(tpl);
            this.$el.find('form').html(this.template.render(this.model.toJSON())).parent().show();
        }

    });

    return ContactFormView;
});