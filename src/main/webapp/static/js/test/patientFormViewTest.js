define([
    "jquery",
    "underscore",
    "backbone",
    "model/patient",
    'view/patient/patientForm'
], function($, _, Backbone, PatientModel, PatientFormView) {
    return describe("Test Patient Form View", function() {

        beforeEach(function() {
            this.patientFormView = new PatientFormView({
                model: new PatientModel()
            });
        });
        it("validationForm method should be implemented", function() {
            expect(this.patientFormView.validationForm(new PatientModel().toJSON()))
                .toEqual(this.patientFormView);
        });
    });
});