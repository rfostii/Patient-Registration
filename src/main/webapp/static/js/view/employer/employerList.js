define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseListView',
    'view/employer/employer',
    'collection/employerList',
    'text!templates/employersTable.jsp',
    'text!templates/employerDetail.jsp'
], function($, _, Backbone, BaseListView, EmployerView, EmployerList, tpl, detailTpl) {
    var EmployerListView = BaseListView.extend({

        initialize: function() {
            EmployerListView.__super__.initialize.apply(this);
            this.searchResult = new EmployerList();
        },

        selectItem: function(model) {
            var detailTemplate = jsviews.templates(detailTpl);
            this.$el.find('#detail .content').html( detailTemplate.render(model.toJSON()) );
            this.$el.find('#detail').show();
            this.hideSearchResult();
        },

        render: function() {
            var self = this;

            this.$el.html($.parseHTML(tpl));
            _.each(this.collection.toArray(), function (employer, i) {
                self.$el.find('#employers tbody').append((new EmployerView({model: employer})).render().$el);
            });
            this.attachEvents();
        },

        showSearchResult: function(query) {
            var self = this;

            self.$el.find(".search-result").html('');
            _.each(this.searchResult.toArray(), function (employer, i) {
                self.$el.find(".search-result").append((new EmployerView({model: employer})).backlightRender(query).$el);
            });
            if (self.$el.find(".search-result").has('tr').length) {
                this.$el.find('#modal').show();
                self.$el.find(".search-result").fadeIn(200);
            }
        }

    });
    return EmployerListView;
});