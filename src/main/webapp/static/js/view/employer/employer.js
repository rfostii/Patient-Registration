define([
    'jquery',
    'underscore',
    'view/base/baseView',
    'text!templates/employer.jsp'
], function($, _, BaseView, tpl) {
    var EmployerView = BaseView.extend({
        initialize: function() {
            EmployerView.__super__.initialize.apply(this);
            this.template = jsviews.templates(tpl);
        },

        click: function() {
            this.model.collection.trigger('selectItem', this.model);
        }
    });

    return EmployerView;
});