define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var BaseFormView = Backbone.View.extend({
        el: $("#content"),

        initialize: function() {
            this.renderData = _.bind(this.renderData, this);
        },

        attachEvents: function() {
            this.$el.off().on('click', '.save-model', $.proxy( this.saveModel, this ));
        }

    });

    return BaseFormView;
});