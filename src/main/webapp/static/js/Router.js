define([
    'jquery',
    'underscore',
    'backbone',
    'collection/patient',
    'view/patient/patientForm',
    'view/searchView',
    'model/patient',
    'view/patient/patientDetail'
], function($, _, Backbone, PatientCollection, PatientFormView, SearchView, PatientModel, PatientDetail) {
    var Router = Backbone.Router.extend({
        routes: {
            "": "search",
            "/": "search",
            "addNew": "addPatient",
            "editPatient/:id": "editPatient",
            "patient/:id": "showPatient"
        },

        initialize: function() {
            new SearchView();
            window.RegistrationApp.Collection.Patient = new PatientCollection();
        },

        clearSearchResult: function() {
            $(".search-result").html('').hide();
            $(".bad-search-result").hide();
        },

        addPatient: function() {
            this.clearSearchResult();
            this.PatientForm = new PatientFormView({ model: new PatientModel() });
            this.PatientForm.setForm();
        },

        editPatient: function(id) {
            var model = window.RegistrationApp.Collection.Patient.get(id);

            this.clearSearchResult();
            this.PatientForm = new PatientFormView({ model: model });
            this.PatientForm.setForm();
        },

        showPatient: function(id) {
            $(".search-result").html('').hide();
            $(".bad-search-result").hide();
            var model = window.RegistrationApp.Collection.Patient.get(id);
            new PatientDetail({ model: model }).render();
        }
    });

    return Router;
});
