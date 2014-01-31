define([
    'jquery',
    'underscore',
    'backbone',
    'view/modalUser',
    'view/modalEmployer',
    'view/modalContact',
    'model/user',
    'model/employer',
    'model/contact'
], function($, _, Backbone, ModalUserView, ModalEmployerView, ModalContactView, userModel, employerModel, contactModel) {
    var TopPanelView = Backbone.View.extend({
        el: $('#top-panel'),

        initialize: function() {
            this.modalUser = new ModalUserView({ model: new userModel() });
            this.modalEmployer = new ModalEmployerView({ model: new employerModel() });
            this.modalContact = new ModalContactView({ model: new contactModel() });

            this.attachEvents();
        },

        attachEvents: function() {
            this.$el.on('click', 'a', $.proxy( this.transition, this ));
            this.$el.on('keyup', '.search-field', $.proxy( this.search, this ));
        },

        transition: function(e) {
            var modalWindowName = $(e.target).data('modalForm');

            this[modalWindowName].setForm();
        },

        search: function() {
            alert('search')
        }
    });
    return TopPanelView;
});