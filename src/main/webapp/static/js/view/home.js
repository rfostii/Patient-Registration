define([
    'jquery',
    'underscore',
    'backbone',
    'view/contact',
    'text!templates/home.jsp'
], function($, _, Backbone, ContactView, tpl) {
    var HomeView = Backbone.View.extend({
        el: $('#content'),

        initialize: function() {
            this.$el.html($.parseHTML(tpl));
        }

    });
    return HomeView;
});
