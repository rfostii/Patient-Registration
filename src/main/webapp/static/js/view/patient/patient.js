define([
    'jquery',
    'underscore',
    'view/base/baseView',
    'view/patient/patientDetail',
    'text!templates/patient.jsp'
], function($, _, BaseView, PatientDetail, tpl) {
    var PatientView = BaseView.extend({
        initialize: function() {
            PatientView.__super__.initialize.apply(this);
            this.template = jsviews.templates(tpl);
        },

        click: function() {
            new PatientDetail({ model: this.model }).render();
        }
    });

    return PatientView;
});