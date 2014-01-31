define([
    'jquery',
    'underscore',
    'backbone',
    'view/employer',
    'text!templates/employersTable.jsp'
], function($, _, Backbone, EmployerView, tpl) {
    var EmployerListView = Backbone.View.extend({
        el: $('#content'),

        initialize: function() {
            this.$el.html($.parseHTML(tpl));
            this.attachEvents();
        },

        attachEvents: function() {
        },

        render: function() {
            var self = this;

            _.each(this.collection.toArray(), function (employer, i) {
                self.$el.find('tbody').append((new EmployerView({model: employer})).render().$el);
            });
        },

        remove: function(model) {
            this.collection.remove(model);
        }

    });
    return EmployerListView;
});