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
            this.repairFormAfterReload = _.bind(this.repairFormAfterReload, this);
        },

        addEmployer: function() {
            this.employerForm = new employerFormView({ model: new EmployerModel() });
            this.employerForm.setForm();
        },

        editEmployer: function(id) {
            this.getEmployerDataFromServer({
                success: this.repairFormAfterReload,
                args: id
            });
        },

        repairFormAfterReload: function(id) {
            this.employerForm = new employerFormView({ model: window.Collections.employer.get(id) });
            this.employerForm.setForm();
        },

        getEmployerDataFromServer: function(handlers) {
            if (!window.Collections.employer.length) {
                window.Collections.employer.fetch({
                    success: function() {
                        handlers.success(handlers.args);
                    },
                    error: function() {
                        console.log('error');
                    }
                });
            } else {
                handlers.success(handlers.args);
            }
        },

        showEmployerList: function() {
            this.employerListView = new EmployerListView({
                collection: window.Collections.employer
            });
            this.getEmployerDataFromServer({
                success: this.employerListView.render
            });
        },

        showEmployer: function() {

        }
    });

    return EmployerRouter;
});