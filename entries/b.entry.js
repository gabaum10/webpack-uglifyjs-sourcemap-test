require('expose-loader?$!expose-loader?jQuery!jquery');
require('jquery.browser');

import TestView from '../js/TestViewB';
new TestView({
    b: 'b test!'
});