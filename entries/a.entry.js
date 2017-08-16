require('expose-loader?$!expose-loader?jQuery!jquery');
require('jquery.browser');

import TestView from '../js/TestViewA';
new TestView({
    a: 'test'
});