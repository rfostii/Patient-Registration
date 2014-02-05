define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseListView',
    'view/employer/employer',
    'text!templates/employersTable.jsp'
], function($, _, Backbone, BaseListView, EmployerView, tpl) {
    var EmployerListView = BaseListView.extend({

        render: function() {
            var self = this;

            this.$el.html($.parseHTML(tpl));
            _.each(this.collection.toArray(), function (employer, i) {
                self.$el.find('#employers tbody').append((new EmployerView({model: employer})).render().$el);
            });
            this.attachEvents();
        },

        showSearchResult: function() {
            var self = this;

            self.$el.find(".search-result").html('');
            _.each(this.collection.toArray(), function (employer, i) {
                self.$el.find(".search-result").append((new EmployerView({model: employer})).render().$el);
            });
            if (self.$el.find(".search-result").has('tr').length) {
                this.$el.find('#modal').show();
                self.$el.find(".search-result").fadeIn(200);
            }
        }

    });
    return EmployerListView;
});