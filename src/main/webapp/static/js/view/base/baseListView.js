define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var BaseView = Backbone.View.extend({
        el: $('#content'),

        attachEvents: function() {
            this.$el.off().on('keyup', '.search-field', $.proxy( this.search, this ));
            this.collection.bind('add', this.render, this);
            this.collection.bind('change', this.render, this);
            this.collection.bind('remove', this.remove, this);
        },

        render: function() {},

        search: function() {},

        remove: function(model) {
            this.collection.remove(model);
        }
    });

    return BaseView;
});