import Backbone from 'backbone';
import Model from './TestModel';

export default Backbone.View.extend({
    el: $('.main-wrapper-b'),
    /**
     * Initilailzer
     * @param options
     */
    initialize: function (options) {
        var view = this;
        view.options = options;

        view.model = new Model({
            value: options.b
        });
    },
    events: {
        'click': function() {
            alert('I am a click on b!!');
        }
    }
});