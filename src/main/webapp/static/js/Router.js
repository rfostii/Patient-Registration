define([
    'jquery',
    'underscore',
    'backbone',
    'collection/patient',
    'collection/employer',
    'view/patient/patientSearch',
    'view/patient/patientForm',
    'view/employer/employerForm',
    'view/patient/patientDetail',
    'model/patient',
    'model/employer'
], function($, _, Backbone, PatientCollection, EmployerCollection, PatientSearchView,
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

        initialize: function() {
            window.App.Collections.patient = new PatientCollection();
            window.App.Collections.employer = new EmployerCollection();
        },

        addPatient: function() {
            this.patientForm = new PatientFormView({ model: new PatientModel() });
            this.patientForm.setForm();
        },

        editPatient: function(id) {
            this.patientForm = new PatientFormView({ model: window.App.Collections.patient.get(id) });
            this.patientForm.setForm();
        },

        showSearchForm: function() {
            new PatientSearchView().render();
        },

        addEmployer: function() {
            this.employerForm = new EmployerFormView({ model: new EmployerModel() });
            this.employerForm.setForm();
        },

        showPatient: function(id) {
            new PatientDetailView({
                model: window.App.Collections.patient.get(id)
            }).render();
        }
    });

    return Router;
});
