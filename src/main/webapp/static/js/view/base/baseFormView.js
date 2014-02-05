define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var BaseFormView = Backbone.View.extend({
        el: $("#content"),

        initialize: function() {
            this.error = [];
            this.renderData = _.bind(this.renderData, this);
        },

        clearError: function() {
            this.error = [];
        },

        saveSucces: function() {
            $('.alert-success').fadeIn().fadeOut(2000);
        },

        saveError: function() {

        },

        attachEvents: function() {
            this.$el.off().on('click', '.save-model', $.proxy( this.saveModel, this ));
        },

        validationBeforeSend: function(data) {
            this.hideError().validation(data).showError();

            if (this.error.length) {
                this.saveError();
                this.clearError();
                return false;
            }
            return true;
        },

        save: function(data) {
            this.model.save(data, {
                success: this.saveSucces,
                error: this.saveError
            });
        },

        validation: function() {
            throw 'Must be implemented!';
        },

        showError: function() {
            _.each(this.error, function (error) {
                var controlGroup = this.$('.' + error.name);
                controlGroup.addClass('has-error');
                controlGroup.find('.help-block').text(error.message);
            }, this);
        },

        hideError: function() {
            this.$('.form-group').removeClass('has-error');
            this.$('.help-block').text('');

            return this;
        }

    });

    return BaseFormView;
});