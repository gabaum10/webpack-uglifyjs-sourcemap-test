import Backbone from 'backbone';
import _ from 'underscore';
import Model from './TestModel';

export default Backbone.View.extend({
    el: $('#panelHome'),
    /**
     * Initilailzer
     * @param options
     *  - bookmarks - JSON of bookmarked chats
     */
    initialize: function (options) {
        var view = this;
        view.options = options;
    },
    events: {
        'click': function() {
            alert('I am a click!');
        }
    }
});