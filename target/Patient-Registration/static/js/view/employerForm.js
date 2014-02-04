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

            this.$el.find('form').submit(function(evt) {
                evt.preventDefault();
                self.model.set($(this).serializeJSON());
                self.model.save({
                    success: function() {
                        self.undelegateEvents();
                        self.remove();
                    }
                });
                if (!window.Collections.employer.findWhere(self.model)) {
                    window.Collections.employer.add(self.model);
                }
                Backbone.history.navigate('employers', {trigger: true});
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
                contacts: window.Collections.contact.toJSON()
            })).parent().show();
        },

        render: function () {
            var self = this;

            this.template = jsviews.templates(tpl);
            window.Collections.contact.fetch({
                success: self.renderData
            });
        }

    });

    return EmployerFormView;
});