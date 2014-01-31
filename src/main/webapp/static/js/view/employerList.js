define([
    'jquery',
    'underscore',
    'backbone',
    'view/employer',
    'text!templates/employersTable.jsp'
], function($, _, Backbone, EmployerView, tpl) {
    var EmployerListView = Backbone.View.extend({
        el: $('#content'),

        attachEvents: function() {
            this.collection.bind('remove', this.remove, this);
        },

        render: function() {
            var self = this;

            this.$el.html($.parseHTML(tpl));
            _.each(this.collection.toArray(), function (employer, i) {
                self.$el.find('tbody').append((new EmployerView({model: employer})).render().$el);
            });
            this.attachEvents();
        },

        remove: function(model) {
            this.collection.remove(model);
        }

    });
    return EmployerListView;
});