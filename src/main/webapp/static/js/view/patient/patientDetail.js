define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/patientDetail.jsp'
], function($, _, Backbone, tpl) {
    var PatientDetail = Backbone.View.extend({
        el: $('#content'),

        initialize: function() {
            this.template = jsviews.templates(tpl);
        },

        render: function() {
            this.$el.html(this.template.render(this.model.toJSON()));
            return this;
        }

    });

    return PatientDetail;
});
