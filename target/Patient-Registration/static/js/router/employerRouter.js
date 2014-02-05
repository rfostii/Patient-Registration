define([
    'jquery',
    'underscore',
    'backbone',
    'collection/employerList',
    'view/employer/employerList',
    'view/topPanel',
    'view/employer/employerForm',
    'model/employer'
], function($, _, Backbone, EmployerList, EmployerListView, TopPanelView, employerFormView, EmployerModel) {
    var EmployerRouter = Backbone.Router.extend({
        routes: {
            "employers": "showEmployerList",
            "addEmployer": "addEmployer",
            "editEmployer/:id": "editEmployer",
            "employer": "showEmployer"
        },

        initialize: function() {
            window.Collections.employer = new EmployerList();
        },

        addEmployer: function() {
            this.employerForm = new employerFormView({ model: new EmployerModel() });
            this.employerForm.setForm();
        },

        editEmployer: function(id) {
            this.employerForm = new employerFormView({ model: window.Collections.employer.get(id) });
            this.employerForm.setForm();
        },

        showEmployerList: function() {
            var self = this;

            this.employerListView = new EmployerListView({
                collection: window.Collections.employer
            });

            if (!window.Collections.employer.length) {
                window.Collections.employer.fetch({
                    success: function() {
                        self.employerListView.render();
                    },
                    error: function() {
                        console.log('error');
                    }
                });
            } else {
                self.employerListView.render();
            }
            $("#popup-content").show();
        },

        showEmployer: function() {

        }
    });

    return EmployerRouter;
});