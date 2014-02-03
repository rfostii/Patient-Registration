define([
    'jquery',
    'underscore',
    'view/base/baseView',
    'text!templates/contact.jsp'
], function($, _, BaseView, tpl) {
    var ContactView = BaseView.extend({
        initialize: function() {
            ContactView.__super__.initialize.apply(this);
            this.template = jsviews.templates(tpl);
        }
    });

    return ContactView;
});