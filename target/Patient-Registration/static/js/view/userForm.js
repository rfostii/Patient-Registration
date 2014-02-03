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

            this.$el.find('form').submit(function(evt) {
                evt.preventDefault();
                self.model.set($(this).serializeJSON());
                self.model.save({
                    success: function() {
                        self.undelegateEvents();
                        self.remove();
                    }
                });
                if (!window.Collections.user.findWhere(self.model)) {
                    window.Collections.user.add(self.model);
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

        render: function() {
            var self = this;

            this.template = jsviews.templates(tpl);
            window.Collections.contact.fetch({
                success: function() {
                    window.Collections.employer.fetch({
                        success: self.renderData
                    });
                }
            });
        }

    });

    return UserFormView;
});