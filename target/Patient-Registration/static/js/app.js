define([
    'jquery',
    'underscore',
    'backbone',
    'router/indexRouter',
    'router/employerRouter',
    'router/contactRouter',
    'router/userRouter'
], function($, _, Backbone, IndexRouter, EmployerRouter, ContactRouter, UserRouter) {
    (function(){
        window.Collections = {};

        var indexRouter = new IndexRouter();
        var employerRouter = new EmployerRouter();
        var contactRouter = new ContactRouter();
        var userRouter = new UserRouter();

        Backbone.history.start();
    })();
});