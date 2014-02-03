define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseListView',
    'view/employer',
    'text!templates/employersTable.jsp'
], function($, _, Backbone, BaseListView, EmployerView, tpl) {
    var EmployerListView = BaseListView.extend({

        render: function() {
            var self = this;

            this.$el.html($.parseHTML(tpl));
            _.each(this.collection.toArray(), function (employer, i) {
                self.$el.find('tbody').append((new EmployerView({model: employer})).render().$el);
            });
            this.attachEvents();
        },

        search: function(evt) {
            var self = this;

            this.collection.fetch({
                url: [this.collection.url, $(evt.target).val()].join(''),
                success: function() {
                    self.render();
                }
            });
        },

        remove: function(model) {
            this.collection.remove(model);
        }

    });
    return EmployerListView;
});