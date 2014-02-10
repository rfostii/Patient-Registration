define([
    'jquery',
    'underscore',
    'model/baseModel'
], function($, _, BaseModel){
    var Employer = BaseModel.extend({
        urlRoot: '/api/employer/',
        defaults: {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phoneNumber: ''
        }
    });

    return Employer;
});
