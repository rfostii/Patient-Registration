define([
    'jquery',
    'underscore',
    'model/baseModel',
    'model/employer'
], function($, _, BaseModel, EmployerModel){
    var Patient = BaseModel.extend({
        urlRoot: '/api/patient/',
        defaults: {
            firstName: '',
            lastName: '',
            ssn: '',
            dateBirth: '',
            gender: '',
            maritalStatus: '',
            race: '',
            religion: '',
            language: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phoneNumber: '',
            employer: {}
        },

        initialize: function() {
            this.change = _.bind(this.change, this);
            this.on('change', this.change);
        },

        change: function() {
            var self= this;

            if (typeof this.get('employer') === 'object') return false;

            var employer = new EmployerModel({ id: this.get('employer') });
            employer.fetch({
                success: function(model) {
                    self.set({ employer: model.toJSON() }, { silent: true });
                },
                async: false
            })
        }
    });

    return Patient;
});

