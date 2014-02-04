define([
    'jquery',
    'underscore',
    'model/baseModel'
], function($, _, BaseModel){
    var Employer = BaseModel.extend({
        urlRoot: '/api/employer/',
        defaults: {
            name: '',
            contact: {}
        },

        initialize: function() {
            this.on('change', this.change);
        },

        change: function() {
            this.set({
                contact: window.Collections.contact.get(this.get('contact'))
            });
        }
    });

    return Employer;
});
