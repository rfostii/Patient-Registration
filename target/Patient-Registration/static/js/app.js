define([
    'jquery',
    'underscore',
    'backbone',
    'router/indexRouter',
    'router/employerRouter',
    'router/contactRouter',
    'router/userRouter',
    'view/topPanel'
], function($, _, Backbone, IndexRouter, EmployerRouter, ContactRouter, UserRouter, TopPanelView) {
    (function(){
        window.Collections = {};

        var topPanel = new TopPanelView();
        var indexRouter = new IndexRouter();
        var employerRouter = new EmployerRouter();
        var contactRouter = new ContactRouter();
        var userRouter = new UserRouter();

        Backbone.history.start();
    })();
});