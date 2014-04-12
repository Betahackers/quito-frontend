/*global QuitoFrontend, $*/


window.QuitoFrontend = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    QuitoFrontend.init();
});
