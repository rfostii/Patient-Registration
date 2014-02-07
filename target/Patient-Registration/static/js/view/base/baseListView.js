define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var BaseView = Backbone.View.extend({
        el: $('#content'),

        initialize: function() {
            this.render = _.bind( this.render, this );
            this.getData = _.bind( this.getData, this );
        },

        attachEvents: function() {
            this.$el.off().on('keyup', '.search-field', $.proxy( this.search, this ));
            this.$el.on("click", ".close-detail", $.proxy( this.hideDetail, this ));
            this.$el.on('click', '#modal', $.proxy( this.hideSearchResult, this ));
            this.collection.unbind().bind('add', this.render, this);
            this.collection.bind('selectItem', this.selectItem, this);
            this.searchResult.bind('selectItem', this.selectItem, this);
            this.collection.bind('remove', this.remove, this);
        },

        selectItem: function() {},

        render: function() {},

        hideSearchResult: function() {
            this.$el.find('#modal').hide();
            this.$el.find(".search-result").html('').hide();
        },

        hideDetail: function() {
            this.$el.find('#detail').hide().find('.content').html('');
        },

        getData: function(query) {
            var self = this;

            this.searchResult.fetch({
                url: [this.searchResult.url, query].join(''),
                success: function() {
                    self.$('.loading-indicator').hide();
                    self.showSearchResult.call(self, query);
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
        },

        remove: function(model) {
            this.collection.remove(model);
        }
    });

    return BaseView;
});