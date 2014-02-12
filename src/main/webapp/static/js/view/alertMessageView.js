define([
    'jquery',
    'underscore',
    'text!templates/alerts.jsp'
], function($, _, tpl) {
    var AlertMessageView = Backbone.View.extend({
        el: $('#alert-messages'),

        initialize: function() {
            this.$el.html($.parseHTML(tpl));
        },

        showError: function() {
            $('.alert-danger').fadeIn().fadeOut(4000);
        },

        showSuccess: function() {
            $('.alert-success').fadeIn().fadeOut(4000);
        }

    });

    return AlertMessageView;
});