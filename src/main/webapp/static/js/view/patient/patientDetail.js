define([
    'jquery',
    'underscore',
    'backbone',
    'view/patient/patient',
    'text!templates/patientDetail.jsp'
], function($, _, Backbone, PatientView, tpl) {
    var PatientDetailView = Backbone.View.extend({
        el: $('#content'),

        initialize: function() {
            this.template = jsviews.templates(tpl);
        },

        render: function() {
            this.$el.html( this.template.render(this.model.toJSON()) );
        }

    });
    return PatientDetailView;
});
