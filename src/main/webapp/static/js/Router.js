define([
    'jquery',
    'underscore',
    'backbone',
    'view/patient/patientSearch',
    'view/patient/patientForm',
    'view/employer/employerForm',
    'view/patient/patientDetail',
    'model/patient',
    'model/employer'
], function($, _, Backbone, PatientSearchView,
            PatientFormView, EmployerFormView, PatientDetailView, PatientModel, EmployerModel) {

    var Router = Backbone.Router.extend({
        routes: {
            "/": "showSearchForm",
            "": "showSearchForm",
            "addPatient": "addPatient",
            "editPatient/:id": "editPatient",
            "patient/:id": "showPatient",
            "addEmployer": "addEmployer"
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
                }
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
                }
            }, {silent: true});
        }
    });

    return Router;
});
