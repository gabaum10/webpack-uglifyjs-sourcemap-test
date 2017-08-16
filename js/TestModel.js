import Backbone from 'backbone';
import _ from 'underscore';

export default Backbone.Model.extend({
    defaults: {
        parse: true,
        visible: true
    },

    initialize: function (data, options) {
        this.options = _.extend({}, options);
        console.log(this.options);
    }
});