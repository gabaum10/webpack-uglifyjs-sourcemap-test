import Backbone from 'backbone';
import Model from './TestModel';

export default Backbone.View.extend({
    el: $('.main-wrapper'),
    /**
     * Initilailzer
     * @param options
     */
    initialize: function (options) {
        var view = this;
        view.options = options;

        view.model = new Model({
            value: options.a
        });
    },
    events: {
        'click': function() {
            alert('I am a click!');
        }
    }
});