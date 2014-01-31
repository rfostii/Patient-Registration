define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/user.jsp',
    'jsrender'
], function($, _, Backbone, tpl) {
    var UserView = Backbone.View.extend({
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
            this.model.collection.trigger('change', this.model);
        },
        render: function() {
            this.$el.html(this.template.render(this.model.toJSON()));
            return this;
        }
    });
    return UserView;
});