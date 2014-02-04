define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var BaseView = Backbone.View.extend({
        el: $('#content'),

        attachEvents: function() {
            this.$el.off().on('keyup', '.search-field', $.proxy( this.search, this ));
            this.$el.on('click', '#modal', $.proxy( this.hideSearchResult, this ));
            this.collection.bind('add', this.render, this);
            this.collection.bind('remove', this.remove, this);
        },

        render: function() {},

        hideSearchResult: function() {
            this.$el.find('#modal').hide();
            this.$el.find(".search-result").html('').hide();
        },

        search: function(evt) {
            var self = this;
            var query = $(evt.target).val();

            self.$el.find(".search-result").html('').hide();

            if (query.length < 3) return false;

            this.collection.fetch({
                url: [this.collection.url, $(evt.target).val()].join(''),
                success: function() {
                    self.showSearchResult.apply(self);
                }
            });
        },

        remove: function(model) {
            this.collection.remove(model);
        }
    });

    return BaseView;
});