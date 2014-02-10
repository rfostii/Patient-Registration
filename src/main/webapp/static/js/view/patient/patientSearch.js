define([
    'jquery',
    'underscore',
    'backbone',
    'view/base/baseSearchView',
    'view/patient/patient',
    'text!templates/search.jsp',
    'text!templates/patientDetail.jsp'
], function($, _, Backbone, BaseSearchView, PatientView, tpl) {
    var PatientSearchView = BaseSearchView.extend({

        initialize: function() {
            PatientSearchView.__super__.initialize.apply(this);
            this.searchResult = window.App.Collections.patient;
        },

        render: function() {
            this.$el.html($.parseHTML(tpl));
            this.attachEvents();
        },

        showSearchResult: function(query) {
            var self = this;

            self.$el.find(".search-result").html('');
            self.$el.find('#new-patient').hide();
            _.each(this.searchResult.toArray(), function (patient) {
                self.$el.find(".search-result").append((new PatientView({model: patient})).backlightRender(query).$el);
            });
            if (self.$el.find(".search-result").has('tr').length) {
                this.$el.find('#modal').show();
                self.$el.find(".search-result").fadeIn(200);
            } else {
                self.$el.find('#new-patient').show();
            }
        }

    });
    return PatientSearchView;
});
