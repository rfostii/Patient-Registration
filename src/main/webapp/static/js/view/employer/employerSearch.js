define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseSearchView',
    'view/employer/employer'
], function($, _, Backbone, BaseSearchView, EmployerView) {
    var EmployerSearchView = BaseSearchView.extend({

        initialize: function() {
            EmployerSearchView.__super__.initialize.apply(this);
            this.searchResult = window.App.Collections.employer;
            this.attachEvents();
        },

        selectItem: function(model) {
            this.$el.find("input[name=employer]").val(model.get('id'));
            this.$el.find(".search-field").val(model.get('name'));
            this.hideSearchResult();
        },

        hideSearchResult: function() {
            this.$el.find(".search-result").html('');
            this.$el.find('#new-employer').hide();
        },

        showSearchResult: function(query) {
            var self = this;

            this.hideSearchResult();
            _.each(this.searchResult.toArray(), function (employer) {
                self.$el.find(".search-result").append((new EmployerView({model: employer})).backlightRender(query).$el);
            });
            if (this.$el.find(".search-result").has('tr').length) {
                this.$el.find(".search-result").fadeIn(200);
            } else {
                this.$el.find('#new-employer').show();
            }
        }

    });
    return EmployerSearchView;
});
