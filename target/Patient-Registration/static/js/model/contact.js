define([
    'jquery',
    'underscore',
    'model/baseModel',
], function($, _, BaseModel){
    var Contact = BaseModel.extend({
        urlRoot: '/api/contact/',
        defaults: {
            address: '',
            city: '',
            stage: '',
            zip: '',
            phoneNumber: ''
        }
    });

    return Contact;
});