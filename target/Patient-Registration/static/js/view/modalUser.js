define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/modalUser.jsp'
], function($, _, Backbone, userTpl) {
    var ModalUserView = Backbone.View.extend({
        el: $('#popup-content'),

        attachEvents: function() {
            this.$el.off();
            this.$el.on('click', '.save-model', $.proxy( this.saveModel, this ));
        },

        saveModel: function() {
            var self = this;

            this.$('#myModal').find('form').submit(function(evt) {
                evt.preventDefault();
                self.model.set($(this).serializeJSON());
                console.log(self.model, $(this).serializeJSON())
                self.model.save({
                    success: function() {

                    },
                    error: function() {

                    }
                });
                window.Collections.user.add(self.model);
            });
        },

        setForm: function() {
            this.render();
            this.$el.show().find('button').text('Create New User');
            this.$el.find('#popup-form').html($.parseHTML(userTpl));
            this.attachEvents();
        },

        render: function() {

        }

    });

    return ModalUserView;
});