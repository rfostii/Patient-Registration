define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseView',
    'text!templates/patient.jsp'
], function($, _, Backbone, BaseView, tpl) {
    var PatientView = BaseView.extend({
        initialize: function() {
            PatientView.__super__.initialize.apply(this);
            this.template = jsviews.templates(tpl);
        },

        click: function() {
            Backbone.history.navigate('/patient/' + this.model.id, {trigger: true});
        }
    });

    return PatientView;
});