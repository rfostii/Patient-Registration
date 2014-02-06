define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var TopPanelView = Backbone.View.extend({
        el: $('#top-panel'),

        initialize: function() {
            var path = window.location.hash.split('/')[0];

            this.attachEvents();
            this.$('a[href=' + path + ']').parent().addClass('active');
        },

        attachEvents: function() {
            this.$el.on('click', 'a', $.proxy( this.click, this ));
        },

        click: function(evt) {
            this.$el.find('li').removeClass('active');
            this.$(evt.target).parent().addClass('active');
        }

    });
    return TopPanelView;
});