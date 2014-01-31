define([
    'jquery',
    'underscore',
    'backbone',
    'collection/employerList',
    'view/employerList',
    'view/topPanel'
], function($, _, Backbone, EmployerList, EmployerListView, TopPanelView) {
    var EmployerRouter = Backbone.Router.extend({
        routes: {
            "employers": "showEmployerList",
            "employer": "showEmployer"
        },

        initialize: function() {
            window.Collections.employer = new EmployerList();
            window.Collections.employer.fetch({
                success: function() {
                    employerListView.render();
                },
                error: function() {
                    console.log('error');
                }
            });
        },

        showEmployerList: function() {
            var employerListView = new EmployerListView({
                collection: window.Collections.employer
            });
            $('#content #logo').hide();
            $('#contacts, #employers, #users').hide();
            $('#employers').show();
        },

        showEmployer: function() {

        }
    });

    return EmployerRouter;
});