define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home.jsp'
], function($, _, Backbone, tpl) {
    var HomeView = Backbone.View.extend({
        el: $('#content'),

        initialize: function() {
            this.$el.html($.parseHTML(tpl));
        }

    });
    return HomeView;
});
