define([
    'jquery',
    'underscore',
    'view/base/baseView',
    'text!templates/user.jsp'
], function($, _, BaseView, tpl) {
    var UserView = BaseView.extend({
        initialize: function() {
            UserView.__super__.initialize.apply(this);
            this.template = jsviews.templates(tpl);
        }
    });

    return UserView;
});