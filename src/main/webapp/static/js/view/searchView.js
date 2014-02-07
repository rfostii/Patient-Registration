define([
    'jquery',
    'underscore',
    'backbone',
    'view/patient/patient'
], function($, _, Backbone, PatientView) {
    var SearchView = Backbone.View.extend({
        el: $('#search'),

        initialize: function() {
            this.clear();
            this.attachEvent();
        },

        clear: function() {
            $('#content').html('');
            this.$el.find(".search-result").html('').hide();
            this.$el.find(".bad-search-result").hide();
        },

        attachEvent: function() {
            this.$el.off().on('keyup', '.search-field', $.proxy( this.search, this ));
        },

        getData: function(query) {
            var self = this;

            this.$('.loading-indicator').show();
            window.RegistrationApp.Collection.Patient.fetch({
                url: [window.RegistrationApp.Collection.Patient.url, query].join(''),
                success: function() {
                    self.showSearchResult(query);
                    self.$('.loading-indicator').hide();
                }
            });
        },

        search: function(evt) {
            var self = this;
            var query = $(evt.target).val();

            if (query.length < 3) return false;

            this.$('.loading-indicator').show();
            setTimeout(function() {
                self.getData(query);
            }, 300);
        },

        showSearchResult: function(query) {
            var self = this;

            this.$el.find(".search-result").html('');
            _.each(window.RegistrationApp.Collection.Patient.toArray(), function (patinet) {
                self.$el.find(".search-result").append((new PatientView({model: patinet})).backlightRender(query).$el);
            });
            if (this.$el.find(".search-result").has('div').length) {
                this.$el.find(".search-result").fadeIn(200);
            } else {
                this.$el.find(".bad-search-result").show();
            }
        }

    });
    return SearchView;
});
