define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone) {
    var BaseView = Backbone.View.extend({

        initialize: function() {
            this.attachEvents();
        },

        attachEvents: function() {},

        backlightRender: function(query) {
            var markedData = JSON.stringify(this.model.toJSON());

            _.each(query.split(' '), function(keyWord) {
                markedData = markedData.replace(keyWord, ['<strong>', keyWord, '</strong>'].join(''));
            });

            this.$el.html(this.template.render(JSON.parse(markedData)));
            return this;
        },

        render: function() {
            this.$el.html(this.template.render(this.model.toJSON()));
            return this;
        }

    });

    return BaseView;
});