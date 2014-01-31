define([
    'jquery',
    'underscore',
    'backbone',
    'view/topPanel',
    'view/home'
], function($, _, Backbone, TopPanelView, HomeView) {
    var IndexRouter = Backbone.Router.extend({

        routes: {
            "": "index",
            '/': "index"
        },

        index: function() {
            var homeView = new HomeView();

            $("#popup-content").hide();
        }

    });

    return IndexRouter;
});
