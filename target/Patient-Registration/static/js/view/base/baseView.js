define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var BaseView = Backbone.View.extend({
        tagName: 'tr',

        initialize: function() {
            this.attachEvents();
        },

        attachEvents: function() {
            this.$el.on('click', '.remove', $.proxy( this.delete, this ));
            this.$el.on('click', $.proxy( this.click, this ));
        },

        click: function() {
            this.model.collection.trigger('selectItem', this.model);
        },

        delete: function() {
            this.model.destroy();
            this.remove();
        },

        render: function() {
            this.$el.html(this.template.render(this.model.toJSON()));
            return this;
        }

    });

    return BaseView;
});