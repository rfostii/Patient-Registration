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
            this.$el.on('click', 'a', $.proxy( this.click, this ));
        },

        click: function(evt) {
            this.$el.find('li').removeClass('active');
            $(evt.target).parent().addClass('active');
        }

    });
    return TopPanelView;
});