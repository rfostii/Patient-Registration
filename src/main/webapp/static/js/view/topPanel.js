define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var TopPanelView = Backbone.View.extend({
        el: $('#top-panel'),

        initialize: function() {
            this.attachEvents();
        },

        attachEvents: function() {
            this.$el.on('keyup', '.search-field', $.proxy( this.search, this ));
        },

        search: function() {
            alert('search')
        }
    });
    return TopPanelView;
});