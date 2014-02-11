define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var BaseSearchView = Backbone.View.extend({
        el: $('#content'),

        initialize: function() {
            this.render = _.bind( this.render, this );
            this.getData = _.bind( this.getData, this );
        },

        attachEvents: function() {
            this.$el.off('keyup').on('keyup', '.search-field', $.proxy( this.search, this ));
            this.$el.on('click', '#modal', $.proxy( this.hideSearchResult, this ));
            this.searchResult.unbind('selectItem').bind('selectItem', this.selectItem, this);
        },

        selectItem: function() {},

        render: function() {},

        hideSearchResult: function() {
            this.$el.find('#modal').hide();
            this.$el.find(".search-result").html('').hide();
        },

        getData: function(query) {
            var self = this;

            this.searchResult.fetch({
                url: [this.searchResult.url, 'search/', query].join(''),
                success: function() {
                    self.showSearchResult.call(self, query);
                    self.$('.loading-indicator').hide();
                }
            });
        },

        search: function(evt) {
            var self = this;
            var query = $(evt.target).val();

            this.$el.find(".search-result").html('').hide();

            if (query.length < 3) return false;

            this.$('.loading-indicator').show();
            setTimeout(function() {
                self.getData(query);
            }, 300);
        }
    });

    return BaseSearchView;
});