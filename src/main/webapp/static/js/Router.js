define([
    'jquery',
    'underscore',
    'backbone',
    'view/patient/patientSearch',
    'view/patient/patientForm',
    'view/employer/employerForm',
    'view/patient/patientDetail',
    'view/alertMessageView',
    'model/patient',
    'model/employer'
], function($, _, Backbone, PatientSearchView,
            PatientFormView, EmployerFormView, PatientDetailView, AlertMessageView, PatientModel, EmployerModel) {

    var Router = Backbone.Router.extend({
        routes: {
            "/": "showSearchForm",
            "": "showSearchForm",
            "addPatient": "addPatient",
            "editPatient/:id": "editPatient",
            "patient/:id": "showPatient",
            "addEmployer": "addEmployer"
        },

        initialize: function() {
            this.alertMessage = new AlertMessageView();

            this.bind("route",function() {
                $('#content').animate({left: '-20em', opacity: '0'}, 0)
                             .animate({left: '5em', opacity: '1'}, 800)
                             .animate({left: '-1em'}, 400);
            });
        },

        addPatient: function() {
            new PatientFormView({ model: new PatientModel() }).setForm();
        },

        editPatient: function(id) {
            new PatientModel({ id : id}).fetch({
                success: function(model) {
                    new PatientFormView({
                        model: model
                    }).setForm();
                },
                error: this.alertMessage.showError
            }, {silent: true});
        },

        showSearchForm: function() {
            new PatientSearchView().render();
        },

        addEmployer: function() {
            new EmployerFormView({ model: new EmployerModel() }).setForm();
        },

        showPatient: function(id) {
            new PatientModel({ id : id}).fetch({
                success: function(model) {
                    new PatientDetailView({
                        model: model
                    }).render();
                },
                error: this.alertMessage.showError
            }, {silent: true});
        }
    });

    return Router;
});
