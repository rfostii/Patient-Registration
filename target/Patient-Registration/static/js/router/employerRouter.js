define([
    'jquery',
    'underscore',
    'backbone',
    'collection/employerList',
    'view/employerList',
    'view/topPanel',
    'view/modalEmployer',
    'model/employer'
], function($, _, Backbone, EmployerList, EmployerListView, TopPanelView, ModalEmployerView, EmployerModel) {
    var EmployerRouter = Backbone.Router.extend({
        routes: {
            "employers": "showEmployerList",
            "employer": "showEmployer"
        },

        initialize: function() {
            this.modalEmployer = new ModalEmployerView({ model: new EmployerModel() });
            window.Collections.employer = new EmployerList();
            this.employerListView = new EmployerListView({
                collection: window.Collections.employer
            });
        },

        showEmployerList: function() {
            var self = this;

            this.modalEmployer.setForm();
            window.Collections.employer.fetch({
                success: function() {
                    self.employerListView.render();
                },
                error: function() {
                    console.log('error');
                }
            });
            $("#popup-content").show();
        },

        showEmployer: function() {

        }
    });

    return EmployerRouter;
});