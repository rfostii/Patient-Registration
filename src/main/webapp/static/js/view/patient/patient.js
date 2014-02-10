define([
    'jquery',
    'underscore',
    'view/base/baseView',
    'text!templates/patient.jsp'
], function($, _, BaseView, tpl) {
    var PatientView = BaseView.extend({
        initialize: function() {
            PatientView.__super__.initialize.apply(this);
            this.template = jsviews.templates(tpl);
        }
    });

    return PatientView;
});