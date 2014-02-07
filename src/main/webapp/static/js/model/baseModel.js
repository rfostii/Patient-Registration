define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){
    var BaseModel = Backbone.Model.extend({
        toJSON: function() {
            var json = _.clone(this.attributes);

            for (var attr in json) {
                if ((json[attr] instanceof Backbone.Model) || (json[attr] instanceof Backbone.Collection)) {
                    json[attr] = json[attr].toJSON();
                }
            }
            return json;
        }
    });

    return BaseModel;
});