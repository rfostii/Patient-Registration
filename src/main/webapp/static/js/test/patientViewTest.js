define([
    "jquery",
    "underscore",
    "backbone",
    "model/patient",
    'view/patient/patient'
], function($, _, Backbone, PatientModel, PatientView) {
    return describe("Test Patient View", function() {

        beforeEach(function() {
            this.patientView = new PatientView({
                model: new PatientModel({})
            });
        });
        it("should has defined template", function() {
            expect(this.patientView.template).toBeDefined();
        });

        it("tag name should be <tr>", function() {
            expect(this.patientView.tagName).toEqual('tr');
        });

        it("render method should return 'this'", function() {
            expect(this.patientView.render()).toEqual(this.patientView);
        });

        it("render method should fill $el", function() {
            expect(this.patientView.render().$el.find('table').length).toEqual(1);
        });
    });
});
