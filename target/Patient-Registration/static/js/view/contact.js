define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/contact.jsp',
    'jsrender'
], function($, _, Backbone, tpl) {
    var ContactView = Backbone.View.extend({
        tagName: 'tr',
        initialize: function() {
            this.template = jsviews.templates(tpl);
            this.attachEvents();
        },

        attachEvents: function() {
            this.$el.on('click', '.edit', $.proxy( this.change, this ));
            this.$el.on('click', '.remove', $.proxy( this.delete, this ));
        },

        delete: function() {
            this.model.destroy();
            this.remove();
        },

        change: function() {
        },

        render: function() {
            this.$el.html(this.template.render(this.model.toJSON()));
            return this;
        }
    });

    return ContactView;
});